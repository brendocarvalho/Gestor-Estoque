import styles from "./style.module.css";
import Navbar from "../../components/Navbar";
import OpenButton from "../../components/Buttons/OpenButton";
import UpdateButton from "../../components/Buttons/UpdateButton";
import RemoveButton from "../../components/Buttons/RemoveButton";
import { useContext } from "react";
import ItemContext from "../../contexts/ItemContext";

export default function Stock() {
  const { item, removeItem } = useContext(ItemContext);

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
            {item.length > 0 ? (
              item.map(currentItem => (
                <>
                  <tr key={currentItem.id}>
                    <td>{currentItem.id}</td>
                    <td>{currentItem.name}</td>
                    <td>{currentItem.quantity}</td>
                    <td>{currentItem.category}</td>
                    <td>
                      <div className={styles.btnControl}>
                        <OpenButton textButton="Ver" link={"items"} id={currentItem.id}/>
                        <UpdateButton textButton="Atualizar" link={"updateItem"} id={currentItem.id} />
                        <RemoveButton textButton="Excluir" onClick={() => removeItem(currentItem.id)}/>
                      </div>
                    </td>
                  </tr>
                </>
              ))
            ) : (
              <tr>
                <td>Não há itens cadastrados!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
