import { useEffect } from "react";

import { Box, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import { fetchContacts } from "../redux/contacts/operations";
import { selectHasAnyContacts } from "../redux/contacts/selectors";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const hasAnyContacts = useSelector(selectHasAnyContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Box sx={{display: 'flex', justifyContent: 'center', my: 3}}>
        <Typography variant="h3">My contacts</Typography>
      </Box>

      <Stack alignItems={"flex-start"} gap={2}>
        <ContactForm />
        {hasAnyContacts ? <SearchBox /> : null}
      </Stack>

      <ContactList />
    </>
  );
}
