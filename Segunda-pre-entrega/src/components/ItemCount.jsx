import { useEffect, useState } from "react";

const ItemCount = ({ stock }) => {
  const [counter, setCounter] = useState(1);
  const [itemStock, setItemStock] = useState(stock);

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

  const onAdd = () => {
    if (counter <= itemStock) {
      setItemStock(itemStock - counter);
      setCounter(1);
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
          <button type="button" className="btn nave" onClick={onAdd}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
