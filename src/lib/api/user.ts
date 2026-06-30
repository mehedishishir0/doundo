
import axiosInstance from "./axios-instance"




export async function getSingleUser(userId:string) {
    try{
        const res=await axiosInstance.get(`/user/${userId}`)
        const data=await res.data;
        return data.data;
    }catch(error){
         if(error instanceof Error){
            throw new Error(error.message || '')
         }
    }
    
    
}