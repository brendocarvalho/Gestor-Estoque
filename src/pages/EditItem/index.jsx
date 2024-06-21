import OpenButton from "../../components/Buttons/OpenButton";
import Navbar from "../../components/Navbar";
import style from "./style.module.css";

export default function EditItem() {
  return (
    <section className={style.containerItem}>
      <h1>Stock Items</h1>
      <Navbar />

      <form>
        <div className={style.name}>
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className={style.quantities}>
          <label htmlFor="number">Quantidade</label>
          <input type="number" name="number" id="number" />
        </div>
        <div className={style.price}>
          <label htmlFor="price">Preço</label>
          <input type="number" name="price" id="price" />
        </div>

        <div className={style.categories}>
          <label htmlFor="categories">Categoria</label>
          <select name="categories" id="categories">
            <option value=""></option>
          </select>
        </div>

        <div className={style.description}>
          <label htmlFor="description">Descrição</label>
          <textarea name="description" id="description"></textarea>
        </div>
      </form>
      <OpenButton textButton="salvar"/>
    </section>
  );
}
