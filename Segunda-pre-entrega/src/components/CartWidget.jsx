import { useContext } from "react";
import iconCart from "../assets/basket3.svg";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cantTotalProductos } = useContext(CartContext);

  return (
    cantTotalProductos() > 0 ?
    <Link to={"/cart"} className="btn position-relative naranja">
      <img src={iconCart} alt="carrito" width={24} />
      <span className="position-absolute top-100 start-60 translate-middle badge rounded-pill bg-danger">
        {cantTotalProductos()}
      </span>
    </Link> : ""
  );
};

export default CartWidget;
