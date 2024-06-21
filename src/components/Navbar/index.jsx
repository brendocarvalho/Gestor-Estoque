import { useState } from "react";
import styles from "./style.module.css"
import { Link } from "react-router-dom";

export default function Navbar(props) {
  
  const [loadClass, setLoadClass] = useState(props.state)
  const handleClickChangeClass = (link) => {
    setLoadClass(link)
  }

  return (
    <section className={styles.navContainer}>
      <nav className={styles.navMenu}>
        <Link to="/stock" className={`${styles.button} ${loadClass === "stock" ? styles.active : ""}`}
          onClick={() => handleClickChangeClass("stock")}
        >
          Todos os itens
        </Link>
        <Link to="/addItem" className={`${styles.button} ${loadClass === "addItem" ? styles.active : ""}`}
          onClick={() => handleClickChangeClass("addItem")}
        >
          Novo Item
        </Link>
      </nav>
      <hr />
    </section>
  );
}