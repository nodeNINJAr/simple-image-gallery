'use server';

import { revalidatePath } from 'next/cache';

export async function uploadImage(formData: FormData) {
  try {
    const res = await fetch('http://localhost:3000/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error('Upload failed:', errorText);
      return { success: false, error: errorText };
    }

    const response = await res.json();
    revalidatePath('/');
    return { success: true, response };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
