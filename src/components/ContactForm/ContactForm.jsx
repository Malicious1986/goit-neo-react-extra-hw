import { useId } from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { object, string } from "yup";

import styles from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsOps";

const contactSchema = object({
  name: string().min(3, "Too short").max(50, "Too long").required("Required"),
  number: string().min(3, "Too short").max(50, "Too long").required("Required"),
});

export default function ContactForm() {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();

  const onSubmitHandler = (values, actions) => {
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    );

    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={onSubmitHandler}
      validationSchema={contactSchema}
    >
      <Form className={styles.container}>
        <label htmlFor={nameId}>
          Name
          <Field id={nameId} name="name" />
          <ErrorMessage className={styles.error} name="name" component="span" />
        </label>
        <label htmlFor={numberId}>
          Number
          <Field id={numberId} name="number" />
        </label>
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
