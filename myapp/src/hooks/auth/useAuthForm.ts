import { postAuthLogin } from "@/api/auth/postAuthLogin";
import { postAuthReg } from "@/api/auth/postAuthReg";
import { useAuth } from "@/app/context";
import type { RegisterForm } from "@/types/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


export const useAuthForm = (action: string) => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState<string | null>();
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
      await postAuthReg(data);
    } else {
      const result = await postAuthLogin(data);
      console.log(result);
      if (typeof result === "object" && result !== null) {
        login(result.data.user, result.data.token);
        navigate(`../profile/${result.data.user.name}`);
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
