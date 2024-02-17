import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      let pos = cart.findIndex((product) => product.id === id);
      cart[pos].quantity += quantity;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...item, quantity: quantity }]);
    }
  };
  
  const removeItem = (id) => {
    const items = cart.filter((product) => product.id != id);
    setCart([...items]);
  };
  
  const clear = () => {
    setCart([]);
  };
 
  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };
  
  const cantTotalProductos = () => {
    return cart.reduce((acum, product) => acum += product.quantity, 0)
  }
  const sumaTotalProductos = () => {
    return cart.reduce((acum, product) => acum += product.quantity * product.precio, 0)
  }
  return (
    <CartContext.Provider value={{cart, addItem, clear, removeItem, cantTotalProductos, sumaTotalProductos}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
