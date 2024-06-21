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

  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState(0)
  const [price, setPrice] = useState(0)
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")

  return (
    <>
      <ItemContext.Provider value={{item, setItem, name, setName, quantity, setQuantity, price, setPrice, category, setCategory, description, setDescription}}>
        <RouterProvider router={Router} />
      </ItemContext.Provider>
    </>
  )
}