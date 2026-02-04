import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL as string;

export const getListByGenre = async <T>(element:string) => {
    try{
        console.log(`${BASE_URL}/genre/${element}`)
        return axios.get<T>(`${BASE_URL}/genre/${element}`)
    }catch(error){
        console.error(error)
    }
}