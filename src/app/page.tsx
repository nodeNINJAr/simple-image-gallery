import { Box, Container } from '@mui/material';
import Header from './components/Header';
import UploadButton from './(gallery)/components/UploadButton';
import Footer from './components/Footer';
import { getImages } from '@/utils/cloudinary';
import ClientGallery from './(gallery)/components/ClientGallery';


// 
export default async function GalleryPage({
  searchParams,
}: {
  searchParams: { search?: string };
}) {
   //
   const { images, next_cursor } = await getImages();

  //  
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column',minHeight:"100vh"  }}>
      <Header />
      <Container maxWidth="lg" sx={{ py: 4, flex: 1 }}>
        {/* Image Grid */}
         <ClientGallery initialImages={images} initialCursor={next_cursor} />
      </Container>
      <Footer />
    </Box>
  );
}
