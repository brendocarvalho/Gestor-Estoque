import { useContext } from "react";
import Navbar from "../../components/Navbar";
import style from "./style.module.css";
import ItemContext from "../../contexts/ItemContext";

export default function AddItem() {
  const {item, setItem, name, setName, quantity, setQuantity, price, setPrice, category, setCategory, description, setDescription, handleClick} = useContext(ItemContext)

  // function createItem(name, quantity, price, description, category) {
  //   const date = new Date();
  //   const newDateString = date.toISOString();
  //   const id = Math.floor(Math.random() * 10000)
  //   const newItem = {name, quantity, price, description, id, category, newDateString}
  //   setItem((state) => {
  //     const newState = [newItem, ...state]
  //     localStorage.setItem("storageItem", JSON.stringify(newState))
  //     return newState;
  //   })
  // }

  // function handleClick (ev){
  //   ev.preventDefault()
  //   if(!name.trim() || quantity <= 0 || !price.trim() || !category.trim() || !description.trim()) {
  //     alert("Preencha os campos corretamente.")
  //     return 
  //   }

  //   createItem(name, quantity, price, description, category)
  //   setName("")
  //   setQuantity("")
  //   setPrice("")
  //   setCategory("")
  //   setDescription("")
  // }

  return (
    <section className={style.containerItem}>
      <h1>Teste tela Add Item</h1>
      <Navbar state="addItem" />

      <form onSubmit={handleClick}>
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
            <option disabled value="">Selecione uma categoria</option>
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
          <button type="submit" className={style.openBtn}>Salvar</button>
        </div>
      </form>
    </section>
  );
}