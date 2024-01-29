import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <div className="nave">
      <div className="container">
        <div className="row pt-1 pb-3">
          <div className="col-md-1 justify-content-center">
            <Logo />
          </div>
          <div className="col-md-10 d-flex align-items-center justify-content-center mt-2">
            <ul className="nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link text-dark fs 5"
                  activeclassname="active"
                  to={"/"}
                >
                  Todos los productos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-dark fs 5"
                  activeclassname="active"
                  to={"/category/cerveza"}
                >
                  Cerveza
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-dark fs 5"
                  activeclassname="active"
                  to={"/category/fernet"}
                >
                  Fernet
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-dark fs 5"
                  activeclassname="active"
                  to={"/category/vino"}
                >
                  Vinos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-dark fs 5"
                  activeclassname="active"
                  to={"/category/bebidasblancas"}
                >
                  Bebidas blancas
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-1 d-flex align-items-center justify-content-end mt-2 ">
            <CartWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
