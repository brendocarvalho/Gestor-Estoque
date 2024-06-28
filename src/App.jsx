import { RouterProvider } from "react-router-dom";
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

  function removeItem(id) {
    setItem(state => {
      const newState = state.filter(itemFound => itemFound.id !== id)
      localStorage.setItem("storageItem", JSON.stringify(newState))
      return newState
    })
  }

  

  function handleClick (ev){
    ev.preventDefault()
    if(!name.trim() || quantity <= 0 || !price.trim() || !category.trim() || !description.trim()) {
      alert("Preencha os campos corretamente.")
      return 
    }

    createItem(name, quantity, price, description, category)
    setName("")
    setQuantity("")
    setPrice("")
    setCategory("")
    setDescription("")
  }

  return (
    <>
      <ItemContext.Provider value={{item, setItem, name, setName, quantity, setQuantity, price, setPrice, category, setCategory, description, setDescription, removeItem, createItem, handleClick}}>
        <RouterProvider router={Router} />
      </ItemContext.Provider>
    </>
  )
}