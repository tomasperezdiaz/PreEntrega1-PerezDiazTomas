import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const onAdd = (quantity) => {
    addItem(item, quantity);
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <img src={item.img} alt={item.titulo} className="img-fluid" />
          </div>
          <div className="col-md-4">
            <h1> {item.titulo} </h1>
            <h5> {item.descripcion} </h5>
            <p>
              <b> ${item.precio}</b>{" "}
            </p>
            <ItemCount stock={item.stock} onAdd={onAdd} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
