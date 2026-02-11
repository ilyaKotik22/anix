const BASE_URL = import.meta.env.VITE_BASE_URL as string;
export const postSendComments = async (token:string, animeId:string, text:string) => {
    try{
        const result = await fetch(`${BASE_URL}/comment`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                animeId: animeId,
                content: text,
            }),
            });
            console.log(result)
    }catch(error){
        console.error(error)
    }
}