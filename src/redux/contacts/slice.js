import { createSlice } from "@reduxjs/toolkit";

import {
  addContact,
  fetchContacts,
  deleteContact,
  editContact,
} from "./operations";
import { logout } from "../auth/operations";

const rejectContact = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};

const pendingContact = (state) => {
  state.loading = true;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.rejected, rejectContact)
      .addCase(fetchContacts.pending, pendingContact)
      .addCase(fetchContacts.fulfilled, (state, { payload: contacts }) => {
        state.loading = false;
        state.items = contacts;
      })

      .addCase(addContact.rejected, rejectContact)
      .addCase(addContact.pending, pendingContact)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items.push(payload);
      })

      .addCase(deleteContact.rejected, rejectContact)
      .addCase(deleteContact.pending, pendingContact)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = state.items.filter((item) => item.id !== payload);
      })
      .addCase(logout.fulfilled, (state) => {
        state.items = [];
      })
      .addCase(editContact.fulfilled, (state, { payload }) => {
        const contacts = state.items.map(item => {
          if(item.id === payload.id) {
            return payload
          }
          return item
        });
        state.items = contacts;
      });
  },
});

export const { reducer } = contactsSlice;
