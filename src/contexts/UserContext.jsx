import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export default function UserContextProvider({ children }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //state para armazenar os users
  const [users, setUsers] = useState(() => {
    const searchUsers = localStorage.getItem("users");
    if (!searchUsers) return [];
    return JSON.parse(searchUsers);
  });

  //state para verificar o valor de isAuth na sessionStorage do navegador, caso seja true libera o acesso para a rota "/"
  const [isAuth, setIsAuth] = useState(() => {
    const isLogged = sessionStorage.getItem("isAuth");
    return isLogged === "true";
  });

  // Atualiza o sessionStorage quando isAuth muda
  useEffect(() => {
    sessionStorage.setItem("isAuth", isAuth ? "true" : "false");
  }, [isAuth]);

  const login = () => setIsAuth(true); //Seta o state para true quando o login é bem sucedido!
  const logOut = () => setIsAuth(false); //Seta o state para false quando é realizado o LogOut

  //Cria o usuário
  function createUser(username, email, password) {
    const id = Math.floor(Math.random() * 1000);
    const newUser = { id, username, email, password };
    setUsers((currentState) => {
      const newState = [newUser, ...currentState];
      localStorage.setItem("users", JSON.stringify(newState));
      return newState;
    });
  }

  return (
    <UserContext.Provider
      value={{
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
        users,
        setUsers,
        isAuth,
        setIsAuth,
        login,
        logOut,
        createUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
