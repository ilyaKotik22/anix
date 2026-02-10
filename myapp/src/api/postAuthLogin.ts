import type { FormAuth } from "@/types/auth";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL as string;

export const postAuthLogin = async (form: FormAuth) => {
  try {
    const result:
      | {
          data: {
            token: string;
            user: { name: string; email: string; password: string; id: string };
          };
        }
      | string = await axios.post(`${BASE_URL}/auth/login`, {
      username: form.username,
      email: form.email,
      password: form.password,
    });

    return result;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw err;
    }
    throw new Error("Unexpected error");
  }
};
