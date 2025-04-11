'use client'
import { Button, IconButton } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { ChangeEvent, useRef, useState } from 'react';
import { uploadImage } from '../actions/uploadImage';


interface UploadButtonProps {
  multiple?: boolean;
}
 
// 
const UploadButton = ({ multiple = false }: UploadButtonProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
       const files = e.target.files;
       setIsLoading(true)
       // if !file or length is 0 
       if(!files || files.length ===0) return;
       //loop for multiple upload  
       for(let i = 0 ; i < files.length; i++){
          const formData = new FormData();
          formData.append('file', files[i])
          await uploadImage(formData);
          setIsLoading(false)
       }
  };
   

  // 
  return (
    <>
      {multiple ? (
        <Button
          variant="contained"
          startIcon={<CloudUploadIcon />}
          onClick={() => fileInputRef.current?.click()}
        >
           {isLoading ? "Uploading..." : "Upload Images"}
        </Button>
      ) : (
        <IconButton
          color="primary"
          onClick={() => fileInputRef.current?.click()}
        >
          <CloudUploadIcon />
        </IconButton>
      )}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleUpload}
        style={{ display: 'none' }}
        accept="image/*"
        multiple={multiple}
      />
    </>
  );
};

export default UploadButton;