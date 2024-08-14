import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import styles from "./index.module.css";

export default function () {
  const {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    users,
    createUser,
  } = useContext(UserContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  //Função para verificar se a senha é valida usando regex e a propriedade .test
  const validatePassword = (pwd) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(pwd);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!username.trim() || !email.trim() || !password.trim()) {
      alert("Preencha os campos corretamente");
      return;
    }

    const validateUsername = users.find((user) => user.username === username);
    if (validateUsername) {
      setError("O username informado já está sendo usado por outro usuário!");
      return;
    }

    const validateEmail = users.find((user) => user.email === email);
    if (validateEmail) {
      setError("Este e-mail já está sendo usado por outro usuário!");
      return;
    }

    const isValidPassword = validatePassword(password);
    if (!isValidPassword) {
      setError("A senha deve conter pelo menos 8 caracteres, letras e números");
      return;
    }

    setError("");
    createUser(username, email, password);
    alert("Usuário criado com sucesso!");
    navigate("/");
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2>Tela de cadastros</h2>
        <nav>
          <Link className={styles.a} to="/">
            login
          </Link>
        </nav>
      </section>

      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Cadastre-se</h2>
        <div className={styles.div}>
          <label htmlFor="username">Nome de usuário</label>
          <input
            className={styles.input}
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
          />
        </div>
        <div className={styles.div}>
          <label htmlFor="email">E-mail</label>
          <input
            className={styles.input}
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
        </div>
        <div className={styles.div}>
          <label htmlFor="password">Senha</label>
          <input
            className={styles.input}
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          {error ? (
            <p style={{ fontSize: ".8rem", color: "red" }}>{error}</p>
          ) : (
            ""
          )}
        </div>
        <div className={styles.div}>
          <Link className={styles.a} to="/">
            Já tem cadastro? Clique aqui
          </Link>
        </div>
        <button className={styles.button} type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
}
