import { useAuth } from "@/app/context";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const doLogout = () => {
    logout();
    navigate("/auth");
  };
  return { doLogout };
};
