'use client'
import { Button, IconButton } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { ChangeEvent, useRef } from 'react';


interface UploadButtonProps {
  onUpload: (url: string) => void;
  multiple?: boolean;
}

const UploadButton = ({ onUpload, multiple = false }: UploadButtonProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
      console.log(e);
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
          Upload Images
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