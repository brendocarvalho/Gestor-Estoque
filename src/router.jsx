import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import AddItem from "./pages/AddItem";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Item from "./pages/Item";
import Login from "./pages/Login";
import RootLayout from "./pages/RootLayout";
import Stock from "./pages/Stock";
import UpdateItem from "./pages/UpdateItem";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute element={<RootLayout />} />, //Rota protegida que será carregada apenas se o login for realizado. Comportamento do componente protetor mais detalhado em components/ProtectedRoute
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "stock",
        element: <Stock />,
      },
      {
        path: "items/:itemId",
        element: <Item />,
      },
      {
        path: "addItem",
        element: <AddItem />,
      },
      {
        path: "updateItem/:itemId",
        element: <UpdateItem />,
      },
    ],
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default Router;
