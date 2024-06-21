import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import styles from "./style.module.css";
import UpdateButton from "../../components/Buttons/UpdateButton";
import RemoveButton from "../../components/Buttons/RemoveButton";

export default function Item() {
  return (
    <section>
      <h1>Stock Items</h1>
      <Navbar />
      <div className={styles.container}>
        <h2 className={styles.title}>7 Wonder</h2>
        <div className={styles.buttons}>
          <UpdateButton link={""} textButton={"Atualizar"}/>
          <RemoveButton link={""} textButton={"Excluir"}/>
        </div>
      </div>
      <div className={styles.productInfo}>
        <span>Categoria: </span>
        <span>Quantidade em estoque: </span>
        <span>Preço: R${}.</span>
      </div>
      <div className={styles.productDescription}>
        <p>Descrição: Jogo de tabuleiro para vários jogadores</p>
        <span>Cadastrado em: Fri Jun 16 2023</span>
        <span>Atualizado em: </span>
      </div>
    </section>
  );
}