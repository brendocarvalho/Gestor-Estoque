import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import style from "./style.module.css";

export default function Header() {
  const { logOut } = useContext(UserContext);

  return (
    <section className={style.container}>
      <p>
        <strong>GESTOR STOCK</strong>
      </p>
      <nav className={style.navbar}>
        <Link to="/">
          <button className={style.btn}>Início</button>
        </Link>
        <Link to="stock">
          <button className={style.btn}>Itens</button>
        </Link>
        <Link>
          <button className={style.btn} onClick={() => logOut()}>
            LogOut
          </button>
        </Link>
      </nav>
    </section>
  );
}
