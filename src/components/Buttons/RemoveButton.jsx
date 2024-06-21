import { Link } from "react-router-dom";
import styles from "./style.module.css"

export default function RemoveButton ({link, textButton, id}) {
  return <Link to={`/${link}/${id}`} className={`${styles.btn} ${styles.removeBtn}`}>{textButton}</Link>
}