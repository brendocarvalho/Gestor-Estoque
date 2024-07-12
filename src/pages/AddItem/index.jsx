import Navbar from "../../components/Navbar";
import style from "./style.module.css";
import Form from "../../components/Form";
import { useContext } from "react";
import ItemContext from "../../contexts/ItemContext";

export default function AddItem() {

  const { handleClick } = useContext(ItemContext)

  return (
    <section className={style.containerItem}>
      <h1>Adicionar Item</h1>
      <Navbar state="addItem" />
      <Form handleFunction={handleClick} /> 
    </section>
  );
}