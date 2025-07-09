import { Button, Modal, Box, Typography } from "@mui/material";

import { MODAL_STYLES } from "../../constants";

export default function DeleteContactConfirmModal({
  handleOpen,
  handleClose,
  open,
  onSubmit,
}) {
  return (
    <>
      <Button variant="contained" color="error" onClick={handleOpen}>
        Delete
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={MODAL_STYLES}>
          <Typography variant="h6" mb={2}>
            Delete Contact
          </Typography>
          <Typography variant="h6" mb={2}>
            Are you sure?
          </Typography>
          <Box display={"flex"} justifyContent={"flex-end"}>
            <Button variant="contained" onClick={onSubmit}>
              Yes, I'm sure
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
