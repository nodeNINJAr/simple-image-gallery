'use client';

import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';

interface DeleteDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isLoading:boolean;
}

const DeleteDialog = ({ open, onClose, onConfirm,isLoading }: DeleteDialogProps) => {

    // 
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Delete Image</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this image? This action cannot be undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button  onClick={onConfirm} color="error" autoFocus>
         {isLoading? "Deleting...":"Delete"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;