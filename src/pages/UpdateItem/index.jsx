import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import style from "./style.module.css";
import { useContext } from "react";
import ItemContext from "../../contexts/ItemContext";

export default function UpdateItem() {
  const {item, setItem, name, setName, quantity, setQuantity, price, setPrice, category, setCategory, description, setDescription, updateItem} = useContext(ItemContext);
  const { itemId } = useParams();
  const ItemFound = item.find(item => item.id === +itemId);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    updateItem(name, quantity, price, category, description, ItemFound);
  };

  return (
    <section className={style.containerItem}>
      <Navbar state="addItem" />
      <div>
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

      <div className={style.contentInfo}>
        <form onSubmit={handleSubmit}>
          <div className={style.name}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={ev => setName(ev.target.value)}
            />
          </div>
          <div className={style.quantities}>
            <label htmlFor="number">Quantidade</label>
            <input
              type="number"
              name="number"
              id="number"
              value={quantity}
              onChange={ev => setQuantity(ev.target.value)}
            />
          </div>
          <div className={style.price}>
            <label htmlFor="price">Preço</label>
            <input
              type="number"
              name="price"
              id="price"
              value={price}
              onChange={ev => setPrice(ev.target.value)}
            />
          </div>
          <div className={style.categories}>
            <label htmlFor="categories">Categoria</label>
            <select
              name="categories"
              id="categories"
              value={category} // Valor selecionado do select
              onChange={ev => setCategory(ev.target.value)} // Atualiza o estado da categoria
            >
              <option disabled value="">
                Selecione uma categoria
              </option>
              <option value="Eletronicos">Eletrônicos</option>
              <option value="Vestuario">Vestuário</option>
              <option value="Alimentos">Alimentos</option>
              <option value="Jogos">Jogos</option>
              <option value="Casa">Casa</option>
              {/* Adicione outras opções conforme necessário */}
            </select>
          </div>
          <div className={style.description}>
            <label htmlFor="description">Descrição</label>
            <textarea
              name="description"
              id="description"
              value={description}
              onChange={ev => setDescription(ev.target.value)}></textarea>
          </div>
          <div className={style.btn}>
            <button type="submit" className={style.openBtn}>
              Salvar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}