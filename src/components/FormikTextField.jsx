import { TextField } from "@mui/material";
import { useField } from "formik";

export default function FormikTextField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <TextField
      {...field}
      {...props}
      label={label}
      variant="standard"
      fullWidth
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  );
}