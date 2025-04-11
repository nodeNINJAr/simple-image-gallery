import { v2 as cloudinary } from 'cloudinary';

// Cloudinary config
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Fetch images with pagination support
export async function getImages(nextCursor?: string) {
  try {
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: 'gallery',
      max_results:10,
      resource_type: 'image',
      next_cursor: nextCursor,
    });

    const images = result.resources.map((img) => ({
      public_id: img.public_id,
      secure_url: img.secure_url,
    }));

    return {
      images,
      next_cursor: result.next_cursor || null,
    };
  } catch (error) {
    console.error('Error fetching images:', error);
    return {
      images: [],
      next_cursor: null,
    };
  }
}

export default cloudinary;
