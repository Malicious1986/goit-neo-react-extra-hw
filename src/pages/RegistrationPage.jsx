import { Box, Button, Stack, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import FormikTextField from "../components/FormikTextField";
import { register } from "../redux/auth/operations";

export default function RegistrationPage() {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Too short")
      .max(10, "Too long")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Must be at least 8 characters")
      .matches(/[A-Z]/, "Must include at least one uppercase letter")
      .matches(/[a-z]/, "Must include at least one lowercase letter")
      .matches(/[0-9]/, "Must include at least one number")
      .matches(/[@$!%*?&]/, "Must include at least one special character")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
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
        Register
      </Typography>

      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, dirty, isSubmitting }) => (
          <Box component={Form}>
            <Stack gap={1}>
              <FormikTextField name="name" label="Username" />
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
                disabled={!isValid || !dirty || isSubmitting}
              >
                Register
              </Button>
            </Box>
          </Box>
        )}
      </Formik>
    </Box>
  );
}
