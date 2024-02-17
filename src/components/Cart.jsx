import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import trash from "../assets/trash.svg";

const Cart = () => {
  const { cart, removeItem, clear, cantTotalProductos, sumaTotalProductos } =
    useContext(CartContext);

  if (cantTotalProductos() == 0) {
    return (
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <div className="alert alert-warning mt-3">
              {" "}
              🍺 No se encontraron productos en el carrito <span>:(</span>
            </div>
            <Link to={"/"} className="btn btn-warning my-2 ">
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h1 className="mt-3 mb-3">Productos Seleccionados</h1>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <table className="table">
            <tbody>
              <tr>
              <td className="text-end align-middle" colSpan={6}><a href="#" onClick={clear} className="btn btn-warning">Vaciar carrito<img
                        src={trash}
                        alt="Eliminar producto"
                        title="Elminar productos"
                      /></a></td>
              </tr>
              {cart.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img src={product.img} alt={product.titulo} width={80} />
                  </td>
                  <td className="text-center align-middle">{product.titulo}</td>
                  <td className="text-center align-middle">${product.precio}</td>
                  <td className="text-center align-middle">{product.quantity}</td>
                  <td className="text-center align-middle">${product.quantity * product.precio}</td>
                  <td className="text-end align-middle">
                    <a
                      href="#"
                      onClick={() => {
                        removeItem(product.id);
                      }}
                    >
                      <img
                        src={trash}
                        alt="Eliminar producto"
                        title={product.titulo}
                      />
                    </a>
                  </td>
                </tr>
              ))}
              <tr>
                <td className="text-center align-middle" colSpan={4}>Suma Total</td>
                <td className="text-center align-middle">${sumaTotalProductos()}</td>
                <td className="text-end align-middle"><Link to={"/checkout"} className="btn btn-warning">Checkout</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
