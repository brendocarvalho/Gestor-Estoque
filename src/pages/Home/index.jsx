import style from "./style.module.css";
import UpdateButton from "../../components/Buttons/UpdateButton";
import { useContext } from "react";
import ItemContext from "../../contexts/ItemContext";

export default function Home() {
  const { item, setItem } = useContext(ItemContext);

  const totalInventory = item.reduce((sum, item) => +sum + +item.quantity, 0);
  const lowQuantity = item.filter(item => item.quantity < 10);
  const today = new Date();
  const limitDate = new Date();
  limitDate.setDate(limitDate.getDate() - 10);
  const recentItems = item.filter(item => {
    const itemDate = new Date(item.newDateString);
    return itemDate >= limitDate && itemDate <= today;
  });

  return (
    <section className={style.container}>
      <h1 className={style.title}>Dashboard</h1>
      <main>
        <section className={style.dashContent}>
          <div className={style.dash}>
            Diversidade de itens
            <p>{item.length}</p>
          </div>
          <div className={style.dash}>
            Inventário total
            <p>{totalInventory}</p>
          </div>
          <div className={style.dash}>
            Itens recentes
            <p>{recentItems.length}</p>
          </div>
          <div className={style.dash}>
            Itens acabando
            <p>{lowQuantity.length}</p>
          </div>
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
                {recentItems.length > 0 ? (
                  recentItems.map(item => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>
                        <UpdateButton textButton={"Ver"} />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td>Não há itens cadastrados recentemente!</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className={style.rowTitle}>
            <table>
              <thead>
                <tr>
                  <th>Itens acabando</th>
                  <th>Qtd</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {lowQuantity.length > 0 ? (
                  lowQuantity.map(item => (
                    <tr key={item.id} className={style.rowEnd}>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>
                        <UpdateButton textButton={"Ver"} />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td>Não há itens acabando :)</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </section>
  );
}
