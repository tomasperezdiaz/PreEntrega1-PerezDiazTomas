import Error404 from "./components/Error404";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  CartContextProvider  from "./context/CartContext";
import Cart from "./components/cart";
import Footer from "./components/Footer";
import CheckOut from "./components/CheckOut";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/checkout"} element={<CheckOut />} />
          <Route path={"*"} element={<Error404 />} />  
        </Routes>
        <Footer />
      </BrowserRouter>

    </CartContextProvider>
  );
}

export default App;
