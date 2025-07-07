import { configureStore } from "@reduxjs/toolkit";

import { reducer as contacts } from "./contactsSlice";
import { reducer as filter } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contacts,
    filter,
  },
});
