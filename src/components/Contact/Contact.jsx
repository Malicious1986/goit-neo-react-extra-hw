import { FaUser, FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";

import styles from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p className={styles.record}>
          <FaUser />
          {name}
        </p>
        <p className={styles.record}>
          <FaPhone />
          {number}
        </p>
      </div>
      <button
        className={styles.button}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
}
