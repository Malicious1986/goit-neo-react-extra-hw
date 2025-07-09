import { Button, Modal, Box, Typography, Stack } from "@mui/material";
import { Formik, Form } from "formik";
import { object, string } from "yup";

import { MODAL_STYLES } from "../../constants";
import FormikTextField from "../FormikTextField";

const contactSchema = object({
  name: string().min(3, "Too short").max(50, "Too long").required("Required"),
  number: string().min(3, "Too short").max(50, "Too long").required("Required"),
});

export default function EditContactModal({
  handleOpen,
  handleClose,
  open,
  contact,
  onSubmit,
}) {
  const onSubmitHandler = (fields) => {
    onSubmit({ ...fields, id: contact.id });
    handleClose();
  };
  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Edit
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={MODAL_STYLES}>
          <Typography variant="h6" mb={2}>
            Edit Contact
          </Typography>
          <Formik
            initialValues={{
              name: contact.name,
              number: contact.number,
            }}
            onSubmit={onSubmitHandler}
            validationSchema={contactSchema}
          >
            {({ isValid, dirty }) => (
              <Form>
                <Stack gap={1}>
                  <FormikTextField name="name" label={"Name"} />
                  <FormikTextField name="number" label={"Number"} />
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={!isValid || !dirty}
                  >
                    Done
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </>
  );
}
