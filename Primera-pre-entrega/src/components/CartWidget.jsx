import iconCart from "../assets/basket3.svg";

const CartWidget = () => {
  return (
    <button type="button" className="btn position-relative naranja">
      <img src={iconCart} alt="carrito" width={24} />
      <span className="position-absolute top-100 start-60 translate-middle badge rounded-pill bg-danger">
        1
      </span>
    </button>
  );
};

export default CartWidget;
