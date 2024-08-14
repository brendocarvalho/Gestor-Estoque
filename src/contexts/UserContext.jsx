import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export default function UserContextProvider({ children }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState(() => {
    const searchUsers = localStorage.getItem("users");
    if (!searchUsers) return [];
    return JSON.parse(searchUsers);
  });

  const [isAuth, setIsAuth] = useState(() => {
    const isLogged = sessionStorage.getItem("isAuth");
    return isLogged === "true";
  });

  // Atualiza o sessionStorage quando isAuth muda
  useEffect(() => {
    sessionStorage.setItem("isAuth", [isAuth]);
  }, [isAuth]);

  const login = () => setIsAuth(true);
  const logOut = () => setIsAuth(false);

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
