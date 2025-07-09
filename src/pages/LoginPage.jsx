import { Box, Button, Stack, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import FormikTextField from "../components/FormikTextField";
import { login } from "../redux/auth/operations";

export default function LoginPage() {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.setSubmitting(false);
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 4,
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRadius: 2,
        boxShadow: 4,
      }}
    >
      <Typography variant="h6" textAlign="center">
        Log In
      </Typography>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, dirty }) => (
          <Box component={Form}>
            <Stack gap={1}>
              <FormikTextField name="email" label="Email" type="email" />
              <FormikTextField
                name="password"
                label="Password"
                type="password"
              />
            </Stack>
            <Box mt={3}>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                disabled={!isValid || !dirty}
              >
                Log In
              </Button>
            </Box>
          </Box>
        )}
      </Formik>
    </Box>
  );
}
