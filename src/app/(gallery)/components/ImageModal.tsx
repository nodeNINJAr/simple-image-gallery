'use client';

import { Modal, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface ImageModalProps {
  open: boolean;
  imageUrl: string | null;
  onClose: () => void;
}

const ImageModal = ({ open, imageUrl, onClose }: ImageModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor:'white',
          boxShadow: 24,
          p: 1,
          outline: 'none',
          borderRadius:2,
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8, color: 'white',backgroundColor:"black",border:"white", "&:hover":{
            color:'red',
          } }}
        >
          <CloseIcon />
        </IconButton>
        <img
          src={imageUrl || ''}
          alt="Preview"
          style={{ maxHeight: '90vh', maxWidth: '90vw' }}
        />
      </Box>
    </Modal>
  );
};

export default ImageModal;