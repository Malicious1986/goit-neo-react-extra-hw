import { Snackbar, Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { hideAlert } from "../redux/alert/slice";

export default function GlobalAlert() {
  const dispatch = useDispatch();
  const { open, message, severity } = useSelector((state) => state.alert);

  const handleClose = () => dispatch(hideAlert());

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
