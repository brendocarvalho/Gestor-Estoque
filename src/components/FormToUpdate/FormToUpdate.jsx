import { useContext } from "react";
import ItemContext from "../../contexts/ItemContext";
import style from "./index.module.css";

export default function FormToUpdate({
  handleFunction,
  name,
  quantity,
  price,
  category,
  description,
}) {
  const { setName, setQuantity, setPrice, setCategory, setDescription } =
    useContext(ItemContext);
  return (
    <section className={style.contentForm}>
      <form onSubmit={handleFunction}>
        <div className={style.name}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
        </div>
        <div className={style.quantities}>
          <label htmlFor="number">Quantidade</label>
          <input
            type="number"
            name="number"
            id="number"
            value={quantity}
            onChange={(ev) => setQuantity(ev.target.value)}
          />
        </div>
        <div className={style.price}>
          <label htmlFor="price">Preço</label>
          <input
            type="number"
            name="price"
            id="price"
            value={price}
            onChange={(ev) => setPrice(ev.target.value)}
          />
        </div>

        <div className={style.categories}>
          <label htmlFor="categories">Categoria</label>
          <select
            name="categories"
            id="categories"
            value={category} // Valor selecionado do select
            onChange={(ev) => setCategory(ev.target.value)} // Atualiza o estado da categoria
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
            onChange={(ev) => setDescription(ev.target.value)}
          ></textarea>
        </div>
        <div className={style.btn}>
          <button type="submit" className={style.openBtn}>
            Salvar
          </button>
        </div>
      </form>
    </section>
  );
}
