'use client';

import { Grid, Card, CardMedia} from '@mui/material';


interface ImageGridProps {
  images: { url: string; public_id: string }[];
}

const ImageGrid = ({ images }: ImageGridProps) => {

  //
  return (
    <>
      <Grid container spacing={2}>
        {images.map((img) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={img.public_id}>
            <Card sx={{ position: 'relative' }}>
              <CardMedia
                component="img"
                image={img.url}
                alt={`Image ${img.public_id}`}
                sx={{
                  height: 200,
                  objectFit: 'cover',
                  cursor: 'pointer',
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ImageGrid;