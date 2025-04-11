import { Box, Container } from '@mui/material';
import Header from './components/Header';
import UploadButton from './(gallery)/components/UploadButton';
import Footer from './components/Footer';
import ImageGrid from './(gallery)/components/ImageGrid';
import { getImages } from '@/utils/cloudinary';


interface ImageResource {
  public_id: string;
  secure_url: string;
}

export default async function GalleryPage({
  searchParams,
}: {
  searchParams: { search?: string };
}) {
   //
  const images: ImageResource[] = await getImages();


  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Container maxWidth="lg" sx={{ py: 4, flex: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <UploadButton multiple />
        </Box>

        {/* Image Grid */}
        <ImageGrid images={images} />
      </Container>
      <Footer />
    </Box>
  );
}
