import { Link } from "react-router-dom";
import styles from "./style.module.css"

export default function RemoveButton ({link, textButton, id}) {
  return <button id={id} className={`${styles.btn} ${styles.removeBtn}`}>{textButton}</button>
}