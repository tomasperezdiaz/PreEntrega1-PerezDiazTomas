import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const CheckOut = () => {
  const [nombre, setNombre] = useState();
  const [email, setEmail] = useState();
  const [telefono, setTelefono] = useState();
  const [orderId, setOrderId] = useState();
  const { cart, clear, cantTotalProductos, sumaTotalProductos } =
    useContext(CartContext);

  const generateOrder = () => {
    if (nombre.length === 0) {
      return false;
    }
    if (email.length === 0) {
      return false;
    }
    if (telefono.length === 0) {
      return false;
    }

    const buyer = { name: nombre, email: email, phone: telefono };
    const items = cart.map((item) => ({
      id: item.idx,
      title: item.titulo,
      price: item.precio,
    }));
    const date = new Date();
    const fecha = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    const total = sumaTotalProductos();
    const order = { buyer: buyer, items: items, fecha: fecha, total: total };

    const db = getFirestore();
    const ordesCollection = collection(db, "orders");
    addDoc(ordesCollection, order).then((resultado) => {
      console.log(resultado);
      clear();
      setOrderId(resultado.id)
    });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h1 className="mt-3 mb-3">Checkout</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                onInput={(e) => {
                  setNombre(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                onInput={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Telefono</label>
              <input
                type="text"
                className="form-control"
                onInput={(e) => {
                  setTelefono(e.target.value);
                }}
              />
            </div>

            <button
              type="button"
              className="btn btn-warning"
              onClick={generateOrder}
            >
              Generar Orden
            </button>
          </form>
        </div>
        <div className="col-md-6 text-center">
          <table className="table">
            <tbody>
              {cart.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img src={product.img} alt={product.titulo} width={80} />
                  </td>
                  <td className="text-center align-middle">{product.titulo}</td>
                  <td className="text-center align-middle">
                    ${product.precio}
                  </td>
                  <td className="text-center align-middle">
                    {product.quantity}
                  </td>
                  <td className="text-center align-middle">
                    ${product.quantity * product.precio}
                  </td>
                </tr>
              ))}
              <tr>
                <td className="text-center align-middle" colSpan={4}>
                  Suma Total
                </td>
                <td className="text-center align-middle">
                  ${sumaTotalProductos()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row my-5">
        <div className="col text-center">
          {orderId ? (
            <div className="alert alert-warning text-center" role="alert">
              <h1>Gracias por tu compra</h1>
              <h3>
                Tu id de compra es: <b> {orderId} </b>
              </h3>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
