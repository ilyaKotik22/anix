import axios from "axios";

type FormAuth = {
  username: string;
  email: string;
  password: string;
};

const BASE_URL = import.meta.env.VITE_BASE_URL as string;

export const postAuthLogin = async (form: FormAuth) => {
  try {
    const result = await axios.post(`${BASE_URL}/auth/login`, {
      username: form.username,
      email: form.email,
      password: form.password,
    });

    return result;
  } catch (error) {
    return error.response.data.message;
  }
};
