import axios from "axios";

type FormAuth = {
  username: string;
  email: string;
  password: string;
};

const BASE_URL = import.meta.env.VITE_BASE_URL as string;

export const postAuthReg = async (form: FormAuth) => {
  try {
    await axios.post(`${BASE_URL}/auth/register`, {
      username: form.username,
      email: form.email,
      password: form.password,
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw err;
    }
    throw new Error("Unexpected error");
  }
};
