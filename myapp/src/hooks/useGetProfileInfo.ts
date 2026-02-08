import { getProfileInfo } from "@/api/getProfileInfo"
import { useQuery } from "@tanstack/react-query"

export const useGetProfileInfo = () => {
   
    const token = localStorage.getItem('authToken') || ''
    const {data, isLoading, isSuccess, isError} = useQuery({
        queryKey:[`ProfileInfo`],
        queryFn: ()=> getProfileInfo(token),
        select: (data) => data?.data.user,
        
    })
    return {data, isLoading, isSuccess, isError}
}