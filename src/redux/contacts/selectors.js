import { createSelector } from "@reduxjs/toolkit";

import { selectNameFilter } from "../filters/selectors";

const selectContacts = ({ contacts }) => contacts.items;

export const selectLoading = ({ contacts }) => contacts.loading;
export const selectError = ({ contacts }) => contacts.error;
export const selectFilteredContacts = createSelector(
  selectContacts,
  selectNameFilter,
  (contacts, filter) => {
    if (contacts.length) {
      const normalizedFilter = filter.toLowerCase();

      return contacts.filter(
        ({ name, number }) =>
          name.toLowerCase().includes(normalizedFilter) ||
          number.toLowerCase().includes(normalizedFilter)
      );
    }
    return [];
  }
);

export const selectHasAnyContacts = (state) => selectContacts(state).length;
