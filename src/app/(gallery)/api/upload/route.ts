import cloudinary from '@/utils/cloudinary';
import { NextResponse } from 'next/server';

// 
export async function POST(req:Request) {
    const formData = await req?.formData();
    const file = formData.get('file') as File;
    if (!file) {
        return NextResponse.json({ error: 'No file provided' }, { status: 400 });
      }
    //   
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
     // 
      try {
        const result = await new Promise((resolve, reject) => {
          cloudinary.uploader.upload_stream(
            { folder: 'gallery' },
            (error, uploadResult) => {
              if (error) reject(error);
              else resolve(uploadResult);
            })
            .end(buffer)
        });
        console.log(result);
        return NextResponse.json(result);

      } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json(
        { error: 'Upload failed' },
        { status: 500 }
       );
      }
}
