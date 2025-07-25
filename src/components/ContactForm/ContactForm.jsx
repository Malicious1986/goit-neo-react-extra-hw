import { useState } from "react";

import { Modal, Button, Box, Typography, Stack } from "@mui/material";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { object, string } from "yup";

import { MODAL_STYLES } from "../../constants";
import { addContact } from "../../redux/contacts/operations";
import FormikTextField from "../FormikTextField";

const contactSchema = object({
  name: string().min(3, "Too short").max(50, "Too long").required("Required"),
  number: string().min(3, "Too short").max(50, "Too long").required("Required"),
});

export default function ContactForm() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmitHandler = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
    handleClose();
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Add contact
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={MODAL_STYLES}>
          <Typography variant="h6" mb={2}>
            Add New Contact
          </Typography>
          <Formik
            initialValues={{ name: "", number: "" }}
            validationSchema={contactSchema}
            onSubmit={onSubmitHandler}
          >
            {({ isValid, dirty }) => (
              <Form>
                <Stack gap={1}>
                  <FormikTextField name="name" label="Name" />
                  <FormikTextField name="number" label="Number" />
                </Stack>

                <Box mt={2} display="flex" justifyContent="flex-end">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={!isValid || !dirty}
                  >
                    Add Contact
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </>
  );
}
