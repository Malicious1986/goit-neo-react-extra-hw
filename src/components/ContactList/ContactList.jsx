import { useSelector } from "react-redux";

import styles from "./ContactList.module.css";
import {
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);

  return (
    <>
      <ul className={styles.container}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact {...contact} />
          </li>
        ))}
      </ul>
      {isLoading && <div>Loading...</div>}
    </>
  );
}
