'use server';

import axios from 'axios';
import { revalidatePath } from 'next/cache';

export async function deleteImage(public_id: string) {
  try {
    const response = await axios.delete(`http://localhost:3000/api/delete`, {
      data: { public_id }
    });

    if (response.status < 200 || response.status >= 300) {
      throw new Error('Delete failed');
    }

    revalidatePath('/');
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}