import cloudinary from '@/utils/cloudinary';
import { NextResponse } from 'next/server';


export async function DELETE(request: Request) {
  const { public_id } = await request.json();
 //   
  try {
    const result = await cloudinary.uploader.destroy(public_id);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Delete error:', error);
    return NextResponse.json(
      { error: 'Delete failed' },
      { status: 500 }
    );
  }
}