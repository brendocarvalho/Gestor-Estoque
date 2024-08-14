import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import FormToUpdate from "../../components/FormToUpdate/FormToUpdate";
import ItemContext from "../../contexts/ItemContext";

export default function UpdateItem() {
  const {
    item,
    name,
    quantity,
    price,
    category,
    description,
    setName,
    setQuantity,
    setPrice,
    setCategory,
    setDescription,
    updateItem,
  } = useContext(ItemContext);
  const { itemId } = useParams();
  const ItemFound = item.find((item) => item.id === +itemId);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    updateItem(name, quantity, price, category, description, ItemFound);
    alert("Item atualizado com sucesso!");
  };

  useEffect(() => {
    if (ItemFound) {
      setName(ItemFound.name);
      setQuantity(ItemFound.quantity);
      setPrice(ItemFound.Price);
      setCategory(ItemFound.category);
      setDescription(ItemFound.description);
    }
  }, [ItemFound, setName, setQuantity, setPrice, setCategory, setDescription]);

  return (
    <>
      <FormToUpdate
        name={name}
        category={category}
        description={description}
        price={price}
        quantity={quantity}
        handleFunction={handleSubmit}
      />
    </>
  );
}
