import Navbar from "../../components/Navbar";
import styles from "./style.module.css";
import UpdateButton from "../../components/Buttons/UpdateButton";
import RemoveButton from "../../components/Buttons/RemoveButton";
import ItemContext from "../../contexts/ItemContext";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";

export default function Item() {
  const { itemId } = useParams();
  const { item, removeItem } = useContext(ItemContext);
  const ItemFound = item.find(product => product.id === +itemId);

  if (!ItemFound) {
    return (
      <div>
        <h1>Item excluído com sucesso!</h1>
          <Link to="/">Voltar</Link>
      </div>
    )
  }

  const CreatedAt = ItemFound.newDateString;
  const data = new Date(CreatedAt);
  const dia = data.getDate().toString().padStart(2, "0");
  const mes = (data.getMonth() + 1).toString().padStart(2, "0"); // Mês começa do zero
  const ano = data.getFullYear();
  const hora = data.getHours().toString().padStart(2, "0");
  const minuto = data.getMinutes().toString().padStart(2, "0");
  const dataFormatada = `${dia}/${mes}/${ano} ${hora}:${minuto}`;

  function handleRemove (ev) {
    ev.preventDefault()
    removeItem(ItemFound.id)
  }
  
  return (
    <section>
      <h1>Stock Items</h1>
      <Navbar />
      <div className={styles.container}>
        <h2 className={styles.title}>{ItemFound.name}</h2>
        <div className={styles.buttons}>
          <UpdateButton link={"updateItem"} id={ItemFound.id} textButton={"Atualizar"} />
          <RemoveButton textButton={"Excluir"} onClick={handleRemove}/>
        </div>
      </div>
      <div className={styles.productInfo}>
        <span>Categoria: {ItemFound.category}</span>
        <span>Quantidade em estoque: {ItemFound.quantity}</span>
        <span>Preço: R${ItemFound.price}.</span>
      </div>
      <div className={styles.productDescription}>
        <p>Descrição: {ItemFound.description}</p>
        <span>Cadastrado em: {dataFormatada}</span>
        <span>Atualizado em: {ItemFound.updatedAt}</span>
      </div>
    </section>
  );
}