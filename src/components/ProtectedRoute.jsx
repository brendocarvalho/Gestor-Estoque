import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function ProtectedRoute({ element }) {
  const { isAuth } = useContext(UserContext);
  if (!isAuth) return <Navigate to={"/login"} />;
  else return element;
}
