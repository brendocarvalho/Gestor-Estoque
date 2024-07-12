import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import style from "./style.module.css";
import { useContext } from "react";
import ItemContext from "../../contexts/ItemContext";
import Form from "../../components/Form";

export default function UpdateItem() {
  const { item, name, quantity, price, category, description, updateItem } = useContext(ItemContext);
  const { itemId } = useParams();
  const ItemFound = item.find(item => item.id === +itemId);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    let confirmation = confirm("Deseja realmente atualizar o ítem?");
    if (confirmation) {
      updateItem(name, quantity, price, category, description, ItemFound);
      alert("Item atualizado com sucesso!");
    }
    else {
      alert(`Itém ${ItemFound.name} não atualizado!`)
    }
  };

  return (
    <section className={style.containerItem}>
      <Navbar state="addItem" />
      <div className={style.divContent}>
        <div className={style.container}>
          <h2 className={style.title}>Nome do item: {ItemFound.name}</h2>
        </div>
        <div className={style.productInfo}>
          <span>Categoria: {ItemFound.category}</span>
          <span>Quantidade em estoque: {ItemFound.quantity}</span>
          <span>Preço: R${ItemFound.price}.</span>
        </div>
        <div className={style.productDescription}>
          <p>Descrição: {ItemFound.description}</p>
        </div>
      </div>
      <Form handleFunction={handleSubmit} />
    </section>
  );
}