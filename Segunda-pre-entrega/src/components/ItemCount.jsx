import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onAdd }) => {
  const [counter, setCounter] = useState(1);
  const [itemStock, setItemStock] = useState(stock);
  const [itemAdded, setItemAdded] = useState(false);

  const incrementar = () => {
    if (counter < itemStock) {
      setCounter(counter + 1);
    }
  };

  const decrementar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  // useEffect debe estar a nivel del componente, no dentro de onAdd
  useEffect(() => {
    setItemStock(stock);
  }, [stock]);

  const addToCart = () => {
    if (counter <= itemStock) {
      setItemStock(itemStock - counter);
      setCounter(1);
      onAdd(counter);
      setItemAdded(true);
    }
  };

  return (
    <>
      <div className="row my-1">
        <div className="col-md-4">
          <div className="btn-group" role="group">
            <button className="btn nave" onClick={decrementar}>
              -
            </button>
            <button className="btn nave">{counter}</button>
            <button className="btn nave" onClick={incrementar}>
              +
            </button>
          </div>
        </div>
      </div>
      <div className="row my-1">
        <div className="col-md-8">
          {itemAdded ? (
            <Link to={"/cart"} className="btn nave">
              Terminar compra
            </Link>
          ) : (
            <button type="button" className="btn nave" onClick={addToCart}>
              Agregar al carrito
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ItemCount;
