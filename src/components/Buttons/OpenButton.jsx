import { Link } from "react-router-dom";
import styles from "./style.module.css"

export default function OpenButton ({link, textButton, id}) {
  return <Link to={`/${link}/${id}`} className={`${styles.btn} ${styles.openBtn}`}>{textButton}</Link>
}