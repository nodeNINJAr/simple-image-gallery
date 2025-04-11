'use client';

import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ImageGrid from './ImageGrid';
import UploadButton from './UploadButton';
import { Box } from '@mui/material';
import SearchBar from './SearchBar';

interface ImageResource {
  public_id: string;
  secure_url: string;
}

interface ServerResponse {
    images: ImageResource[];
    next_cursor?: string;
  }

export default function ClientGallery({
  initialImages,
  initialCursor,
}: {
  initialImages: ImageResource[];
  initialCursor?: string;
}) {
    const [images, setImages] = useState<ImageResource[]>(initialImages);
    const [nextCursor, setNextCursor] = useState<string | null>(initialCursor || null);
    const [hasMore, setHasMore] = useState(true);
  //   
  const loadMoreImages = async () => {
    try {
        const res = await fetch(`/api/images${nextCursor ? `?next_cursor=${nextCursor}` : ''}`);
        const data: ServerResponse = await res.json();
        // 
        if (data?.images?.length) {
          setImages((prev) => [...prev, ...data?.images]);
          setNextCursor(data.next_cursor || null);
          setHasMore(Boolean(data?.next_cursor));
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.error('Error loading more images:', error);
        setHasMore(false);
      }
  };
  //   
  const refreshImages = async () => {
    const res = await fetch('/api/images');
    const data = await res.json();
    setImages(data.images);
    setNextCursor(data.next_cursor || null);
    setHasMore(Boolean(data.next_cursor));
  };
  
  //   
  return (
    <>
     <Box sx={{marginBottom:4,display:'flex', justifyContent:'space-between',gap:2}}> <SearchBar /> <UploadButton multiple onUploadComplete={refreshImages} /> </Box>
        <Box sx={{border: '1px dashed gray', p:2, borderRadius:2}}>
        {initialImages.length > 0 ?
           <InfiniteScroll
                dataLength={images?.length}
                next={loadMoreImages}
                hasMore={hasMore}
                loader={<h4 style={{marginTop:'20px', color:"black"}}>Loading...</h4>}
                endMessage={<p style={{marginTop:'20px',color:"black"}}>No more images.</p>}
               >
            <ImageGrid images={images} onUploadComplete={refreshImages} />
          </InfiniteScroll> 
          :   
         //    
        <Box component="section" sx={{color:'black',  p: 2, justifyContent:"center", alignItems:"center",minHeight:"50vh",marginTop:6 }}>
             No Image Available
        </Box>
     }
        </Box>
    </>
   
  );
}
