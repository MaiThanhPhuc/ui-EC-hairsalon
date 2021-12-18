import React, { useEffect } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";


const ConfirmModal = ({
  title,
  confirmMesage,
  openConfirmModal,
  setOpenConfirmModal,
  modalContent,
  onConfirmFunction,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenConfirmModal(false);
  };

  useEffect(() => {
    setOpen(openConfirmModal);
  });

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {modalContent}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            handleClose();
            if (onConfirmFunction) {
              onConfirmFunction();
            }
          }}
          color="primary"
          autoFocus
        >
          {confirmMesage ? confirmMesage : "Okay"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default ConfirmModal;
