import { useNavigate } from "react-router-dom";

export const useLogout = () => {
    const navigate = useNavigate()
  const doLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    navigate('/auth')
  };
  return {doLogout}
};
