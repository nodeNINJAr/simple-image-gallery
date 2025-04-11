import { getImages } from "@/utils/cloudinary";
import { NextResponse } from "next/server";

export async function GET(req:Request) {
      const {searchParams } = new URL(req.url);
      const nextCursor = searchParams.get("next_cursor") || undefined;
      //   
      try{
        const { images, next_cursor } = await getImages(nextCursor);
        return NextResponse.json({ images, next_cursor });
    }
      catch(err){
        console.error(err)
         return NextResponse.json(
            {error:'Failed to fetch images'},
            {status:500}
         )
      } 
}