import style from "./style.module.css";
import UpdateButton from "../../components/Buttons/UpdateButton";
import { useContext } from "react";
import ItemContext from "../../contexts/ItemContext";

export default function Home() {
  
  const {item, setItem} = useContext(ItemContext)

  return (
    <section className={style.container}>
      <h1 className={style.title}>Dashboard</h1>
      <main>
        <section className={style.dashContent}>
          <div className={style.dash}>Diversidade de itens</div>
          <div className={style.dash}>Inventário total</div>
          <div className={style.dash}>Itens recentes</div>
          <div className={style.dash}>Itens acabando</div>
        </section>

        <section className={style.row}>
          <div className={style.rowTitle}>
            <table>
              <thead>
                <tr>
                  <th>Itens Recentes</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Teste</td>
                  <td>
                    <UpdateButton textButton={"Ver"} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={style.rowTitle}>
            <table>
              <thead>
                <tr>
                  <th>Itens Recentes</th>
                  <th>Qtd</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr className={style.rowEnd}>
                  <td>Teste</td>
                  <td>8</td>
                  <td>
                    <UpdateButton textButton={"Ver"} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </section>
  );
}
