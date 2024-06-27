import {createBrowserRouter} from "react-router-dom"
import RootLayout from "./pages/RootLayout"
import Home from "./pages/Home"
import Stock from "./pages/Stock"
import Item from "./pages/Item"
import AddItem from "./pages/AddItem"
import EditItem from "./pages/EditItem"

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "stock",
        element: <Stock />
      },
      {
        path: "items/:itemId",
        element: <Item />
      },
      {
        path: "addItem",
        element: <AddItem />
      },
      {
        path: "editItem/:1",
        element: <EditItem />
      },
    ]
  }
])

export default Router;