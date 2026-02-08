import { postAddFavorite } from "@/api/postAddFavorite"
import { useQuery } from "@tanstack/react-query"
export type AnimeFav = {
    id:string
    title:string
    poster:string
    description:string
}
export const useAddInFavorite = (anime:AnimeFav) => {
    const token = localStorage.getItem('authToken') || ''
     
    const addHandle = () => {
        postAddFavorite(anime,token)
    }
    return {addHandle}
}