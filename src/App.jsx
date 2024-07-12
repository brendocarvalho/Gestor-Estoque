import { RouterProvider, useParams } from "react-router-dom";
import Router from "./router";
import { useState } from "react";
import ItemContext from "./contexts/ItemContext";

export default function App () {
  
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState()
  const [price, setPrice] = useState()
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [item, setItem] = useState(() => {
    const libItem = localStorage.getItem("storageItem")
      if(!libItem) {
      return []
    }
    return JSON.parse(libItem)
  })

  function createItem(name, quantity, price, description, category) {
    const date = new Date();
    const newDateString = date.toISOString();
    const id = Math.floor(Math.random() * 10000)
    const newItem = {name, quantity, price, description, id, category, newDateString}
    setItem((state) => {
      const newState = [newItem, ...state]
      localStorage.setItem("storageItem", JSON.stringify(newState))
      return newState;
    })
  }

  function updateItem (name, quantity, price, category, description, itemFound) {
    const index = item.indexOf(itemFound)
    const updatedAt = new Date()

    const dia = updatedAt.getDate().toString().padStart(2, "0");
    const mes = (updatedAt.getMonth() + 1).toString().padStart(2, "0"); // Mês começa do zero
    const ano = updatedAt.getFullYear();
    const hora = updatedAt.getHours().toString().padStart(2, "0");
    const minuto = updatedAt.getMinutes().toString().padStart(2, "0");
    const dataFormatada = `${dia}/${mes}/${ano} ${hora}:${minuto}`;

    if(!name.trim() || !price.trim() || !category.trim() || !description.trim()) {
      alert("Preencha os campos corretamente.")
      return 
    }
      const ItemUpdated = Object.assign(item[index], {name: name, quantity: quantity, price: price, category: category, description: description, updatedAt: dataFormatada})
      setItem((state) => {
        const newState = [...state]
        newState[index] = ItemUpdated
        localStorage.setItem("storageItem", JSON.stringify(newState))
        return newState
      })
      
      setName("")
      setQuantity("")
      setPrice("")
      setCategory("")
      setDescription("")
  }

  function removeItem(id) {
    let confirmation = confirm("Deseja realmente excluir este item?")
    if(confirmation) {
      setItem(state => {
        const newState = state.filter(itemFound => itemFound.id !== id)
        localStorage.setItem("storageItem", JSON.stringify(newState))
        return newState
      })
      alert("Item removido com sucesso!")
    } else {
      alert("Exclusão não realizada!")
    }
  }

  function handleClick (ev){
    ev.preventDefault()
    if(!name.trim() || quantity <= 0 || !price.trim() || !category.trim() || !description.trim()) {
      alert("Preencha os campos corretamente.")
      return 
    }

    createItem(name, quantity, price, description, category)
    alert("Item cadastrado com sucesso!")
    setName("")
    setQuantity("")
    setPrice("")
    setCategory("")
    setDescription("")
  }

  return (
    <>
      <ItemContext.Provider value={{item, setItem, name, setName, quantity, setQuantity, price, setPrice, category, setCategory, description, setDescription, removeItem, createItem, handleClick, updateItem}}>
        <RouterProvider router={Router} />
      </ItemContext.Provider>
    </>
  )
}