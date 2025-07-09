import { Grid, Box, CircularProgress, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import {
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);

  return (
    <>
      {contacts.length === 0 && !isLoading && (
        <Box mt={4} textAlign="center">
          <Typography variant="body1" color="text.secondary">
            No contacts found
          </Typography>
        </Box>
      )}

      <Grid container spacing={2} mt={2}>
        {contacts.map((contact) => (
          <Grid size={{xs: 12, sm: 6, md: 4, lg: 3}} key={contact.id}>
            <Contact {...contact} />
          </Grid>
        ))}
      </Grid>

      {isLoading && (
        <Box mt={4} display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      )}
    </>
  );
}
