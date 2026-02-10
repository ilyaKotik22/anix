import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL as string;

export const getProfileInfo = async (token: string) => {
  try {
    const results = await axios.get(`${BASE_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(results);
    return results;
  } catch (error) {
    console.error(error);
  }
};
