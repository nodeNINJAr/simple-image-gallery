import { v2 as cloudinary } from 'cloudinary'

// 
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  // 
export async function getImages() {


  // 
   try{
    const result = await cloudinary.api.resources({
      type:'upload',
      prefix:'gallery',
      max_results:500,
      resource_type: 'image',
     }) ;
    return result.resources
   }
   catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
}

  export default cloudinary;