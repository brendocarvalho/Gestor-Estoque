import { Link } from "react-router-dom";
import style from "./style.module.css";

export default function Header() {
  return (
    <section className={style.container}>
      <p>
        <strong>REACT STOCK</strong>
      </p>
      <nav className={style.navbar}>
        <Link to="/">
          <button className={style.btn}>Início</button>
        </Link>
        <Link to="stock">
          <button className={style.btn}>Itens</button>
        </Link>
      </nav>
    </section>
  );
}
