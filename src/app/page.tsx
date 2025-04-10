'use client'
import { Container, Box, TextField } from '@mui/material';
import Header from './components/Header';
import UploadButton from './(gallery)/components/UploadButton';
import Footer from './components/Footer';
import { useState } from 'react';

interface ImageData {
  url: string;
  public_id: string;
}

export default function Home() {
  const [searchTrem ,setSearchTerm] = useState('');
   console.log(searchTrem);


  const handleUpload = (url: string) => {
  
  };



  return (
    <Box sx={{display: 'flex', flexDirection:'column',  minHeight: '100vh' }}>
     <Header />
      <Container maxWidth="lg" sx={{ py: 4, flex: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <TextField
            label="Search images"
            variant="outlined"
            size="small"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <UploadButton onUpload={handleUpload} multiple />
        </Box>
      </Container> 
      <Footer />
    </Box>
  );
}