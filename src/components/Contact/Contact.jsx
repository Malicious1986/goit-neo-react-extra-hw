import { useState } from "react";

import PhoneIcon from "@mui/icons-material/Phone";
import {
  Card,
  CardContent,
  CardActions,
  Stack,
  CardHeader,
} from "@mui/material";
import { useDispatch } from "react-redux";

import { deleteContact, editContact } from "../../redux/contacts/operations";
import DeleteContactConfirmModal from "../DeleteContactConfirmModal/DeleteContactConfirmModal";
import EditContactModal from "../EditContactModal/EditContactModal";

export default function UserCard(contact) {
  const { name, number, id } = contact;
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(null);

  const handleClose = () => setOpenModal(null);

  const onEditContact = (updatedContact) => {
    dispatch(editContact(updatedContact));
    handleClose();
  };

  const onDeleteContact = () => {
    dispatch(deleteContact(id));
    handleClose();
  };

  return (
    <Card sx={{ width: 275, boxShadow: 4 }}>
      <CardHeader
        title={name}
        sx={{
          "& .MuiCardHeader-title": {
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          },
          "& .MuiCardHeader-content": {
            width: "100%",
            textAlign: "start",
          },
        }}
      />

      <CardContent>
        <Stack direction="row" alignItems="center" gap={1}>
          <PhoneIcon />
          {number}
        </Stack>
      </CardContent>

      <CardActions sx={{ justifyContent: "flex-end" }}>
        <EditContactModal
          open={openModal === "edit"}
          handleOpen={() => setOpenModal("edit")}
          handleClose={handleClose}
          contact={contact}
          onSubmit={onEditContact}
        />
        <DeleteContactConfirmModal
          open={openModal === "delete"}
          handleOpen={() => setOpenModal("delete")}
          handleClose={handleClose}
          onSubmit={onDeleteContact}
        />
      </CardActions>
    </Card>
  );
}
