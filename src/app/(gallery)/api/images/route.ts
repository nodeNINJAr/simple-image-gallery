import { getImages } from "@/utils/cloudinary";
import { NextResponse } from "next/server";

export async function GET() {
      try{
         const images = await getImages();
         return NextResponse.json(images)
    }
      catch(err){
        console.error(err)
         return NextResponse.json(
            {error:'Failed to fetch images'},
            {status:500}
         )
      } 
}