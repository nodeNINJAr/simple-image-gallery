'use client';

import { Grid, Card, CardMedia, IconButton, Box } from '@mui/material';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import DeleteIcon from '@mui/icons-material/Delete';
import ImageModal from './ImageModal';
import { useState } from 'react';
import DeleteDialog from './DeleteDialog';
import { deleteImage } from '../actions/deleteImage';


interface ImageGridProps {
  images: { secure_url: string; public_id: string }[];
  onUploadComplete?: () => void;
}

const ImageGrid = ({ images,onUploadComplete  }: ImageGridProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageToDelete, setImageToDelete] = useState<string | null>(null);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

// handle delete image
const handleDelete = async (public_id: string)=>{
    setIsLoading(true)
    await deleteImage(public_id);
    if (onUploadComplete){
      await onUploadComplete();
    } 
    setIsLoading(false);
    setImageToDelete(null);
}

  //
  return (
    <>
    <Grid container spacing={2}>
      {images.map((img) => (
        <Grid 
          item 
          xs={12} 
          sm={6} 
          md={4} 
          lg={3} 
          key={img.public_id}
          onMouseEnter={() => setHoveredImage(img.public_id)}
          onMouseLeave={() => setHoveredImage(null)}
        >
          <Card sx={{ position: 'relative', '&:hover': { boxShadow: 3 } }}>
            <CardMedia
              component="img"
              image={img.secure_url}
              alt={`Image ${img.public_id}`}
              onClick={() => setSelectedImage(img.secure_url)}
              sx={{
                height: 200,
                objectFit: 'cover',
                cursor: 'pointer',
              }}
            />
            {hoveredImage === img.public_id && (
              <Box sx={{ 
               
              }}>
                {/* zoom icon */}
                <IconButton
                  color="error"
                  onClick={() => setSelectedImage(img.secure_url)}
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    transition: 'opacity 0.3s ease',
                    opacity: hoveredImage === img.public_id ? 1 : 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.9)'
                    }
                  }}
                >
                  <ZoomOutMapIcon />
                </IconButton>
                {/* delete icon */}
                <IconButton
                  color="error"
                  onClick={(e) => {
                    e.stopPropagation();
                    setImageToDelete(img.public_id);
                  }}
                  sx={{
                    position: 'absolute', 
                    top: 0, 
                    right: 0,
                    transition: 'opacity 0.3s ease',
                    opacity: hoveredImage === img.public_id ? 1 : 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.9)'
                    }
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            )}
            
          </Card>
        </Grid>
      ))}
    </Grid>
     {/* img zoom modal */}
    <ImageModal
      open={!!selectedImage}
      imageUrl={selectedImage}
      onClose={() => setSelectedImage(null)}
    />
     {/* img delete modal */}
    <DeleteDialog
      isLoading={isLoading}
      open={!!imageToDelete}
      onClose={() => setImageToDelete(null)}
      onConfirm={() => handleDelete(imageToDelete!)}
    />
  </>
  );
};

export default ImageGrid;