import styles from "./style.module.css";
import Navbar from "../../components/Navbar";
import OpenButton from "../../components/Buttons/OpenButton";
import UpdateButton from "../../components/Buttons/UpdateButton";
import RemoveButton from "../../components/Buttons/RemoveButton";

export default function Stock() {
  return (
    <section>
      <h1>Stock Items</h1>
      <Navbar state="stock" />

      <div className={styles.tableItens}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Em Estoque</th>
              <th>Categoria</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Teste</td>
              <td>8</td>
              <td>Teste</td>
              <td>
                <div className={styles.btnControl}>
                  <OpenButton textButton="Ver" />
                  <UpdateButton textButton="Atualizar" />
                  <RemoveButton textButton="Excluir" />
                  {/* <Link to={`/items/1`} className={`${styles.btn} ${styles.open}`}>Ver</Link>
                  <Link to="" className={`${styles.btn} ${styles.update}`}>Atualizar</Link>
                  <Link to="" className={`${styles.btn} ${styles.remove}`}>Excluir</Link> */}
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Teste</td>
              <td>8</td>
              <td>Teste</td>
              <td>
                <div className={styles.btnControl}>
                  <OpenButton link="items" textButton="Ver" id="1" />
                  <UpdateButton textButton="Atualizar" link="editItem" id="1" />
                  <RemoveButton textButton="Excluir" />
                  {/* <Link to="" className={`${styles.btn} ${styles.open}`}>Ver</Link>
                  <Link to="" className={`${styles.btn} ${styles.update}`}>Atualizar</Link>
                  <Link to="" className={`${styles.btn} ${styles.remove}`}>Excluir</Link> */}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
