import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

//Protege a rota de acordo com o login, se o login for validado e realizado o state isAuth recebe true
export default function ProtectedRoute({ element }) {
  const { isAuth } = useContext(UserContext);

  //Se isAuth for false redireciona de volta para a tela de login
  if (!isAuth) return <Navigate to={"/login"} />;
  //Se for true retorna o elemento, chamamos o componente e passamos a prop element lá no roteador para a rota que será protegida
  else return element;
}
