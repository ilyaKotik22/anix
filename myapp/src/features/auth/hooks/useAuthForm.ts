import { postAuthLogin } from "@/api/postAuthLogin";
import { postAuthReg } from "@/api/postAuthReg";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

type RegisterForm = {
  username: string;
  email: string;
  password: string;
};
export const useAuthForm = (action: string) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RegisterForm>({
    mode: "onChange",
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: RegisterForm) => {
    console.log("форма отправленна:", data);
    if (action === "reg") {
      setError(postAuthReg(data));
    } else {
      const result = await postAuthLogin(data);
      console.log(result);
      if (result.data.token) {
        localStorage.setItem("authToken", result.data.token);

        // 2. Сохраняем данные пользователя (опционально)
        localStorage.setItem("user", JSON.stringify(result.data.user));
        navigate(location.pathname, { replace: true });
        navigate(`../profile/${result.data.user.name}`)
        console.log(result);
      } else {
        setError(result);
      }
    }

    reset();
  };

  return {
    register,
    handleSubmit,
    errors,
    error,
    isSubmitting,
    reset,
    onSubmit,
  };
};
