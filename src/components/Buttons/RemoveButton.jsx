import { Link } from "react-router-dom";
import styles from "./style.module.css";

export default function RemoveButton({ textButton, id, onClick }) {
  return (
    <button
      onClick={onClick}
      id={id}
      className={`${styles.btn} ${styles.removeBtn}`}>
      {textButton}
    </button>
  );
}
