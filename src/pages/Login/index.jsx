import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import styles from "./index.module.css";

export default function Login() {
  const { email, setEmail, password, setPassword, users, login, logOut } =
    useContext(UserContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleLogin(ev) {
    ev.preventDefault();
    const userVerification = users.find(
      (user) => user.email === email && user.password === password
    );

    if (userVerification) {
      login();
      alert("Login realizado com sucesso!");
      navigate("/");
      setEmail("");
      setPassword("");
    } else {
      setError("Login incorreto ou usuário não cadastrado!");
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2>Tela de Login</h2>
      </section>

      <form className={styles.form} onSubmit={handleLogin}>
        <h2>Login</h2>
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
          <Link className={styles.a} to="/cadastro">
            Não tem cadastro? Clique aqui
          </Link>
        </div>
        <button className={styles.button} type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
}