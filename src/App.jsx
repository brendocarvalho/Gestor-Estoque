import { RouterProvider } from "react-router-dom";
import Router from "./router";
import { useState } from "react";
import ItemContext from "./contexts/ItemContext";

export default function App () {
  
  const [item, setItem] = useState(() => {
    const libItem = localStorage.getItem("storageItem")
    if(!libItem) {
      return []
    }
    return JSON.parse(libItem)
  })

  function removeItem(id) {
    setItem(state => {
      const newState = state.filter(itemFound => itemFound.id !== id)
      localStorage.setItem("storageItem", JSON.stringify(newState))
      return newState
    })
  }

  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState()
  const [price, setPrice] = useState()
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")

  return (
    <>
      <ItemContext.Provider value={{item, setItem, name, setName, quantity, setQuantity, price, setPrice, category, setCategory, description, setDescription, removeItem}}>
        <RouterProvider router={Router} />
      </ItemContext.Provider>
    </>
  )
}