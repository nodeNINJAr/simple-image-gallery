'use server'
import axios from "axios";
export async function uploadImage(formData:FormData) {
    // 
    try{
        const response = await axios.post('http://localhost:3000/api/upload', formData, {
         headers: {
           'Content-Type': 'multipart/form-data',
         }
        });
        console.log(response);
        return { success: true, response };
       }catch (error) {
        return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
      }
    
}