import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../api/axiosInstance";
import { showAlert } from "../alert/slice";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await api.get("/contacts");
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkApi) => {
    try {
      const dispatch = thunkApi.dispatch;
      const { data } = await api.post("/contacts", contact);
      dispatch(
        showAlert({
          message: `Contact "${data.name}" was added!`,
          severity: "success",
        })
      );
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkApi) => {
    try {
      const dispatch = thunkApi.dispatch;
      const { data } = await api.delete(`/contacts/${id}`);
      dispatch(
        showAlert({
          message: `Contact was deleted!`,
          severity: "success",
        })
      );
      return data.id;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async (contact, thunkApi) => {
    try {
      const dispatch = thunkApi.dispatch;
      const { data } = await api.patch(`/contacts/${contact.id}`, {
        name: contact.name,
        number: contact.number,
      });
      dispatch(
        showAlert({
          message: `Contact was edited!`,
          severity: "success",
        })
      );
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
