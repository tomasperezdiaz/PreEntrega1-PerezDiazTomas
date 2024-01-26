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
                <a className="nav-link text-dark fs 5" href="#">
                 Todos los productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fs 5" href="#">
                  Cerveza
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fs 5" href="#">
                  Fernet
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fs 5" href="#">
                  Vinos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fs 5" href="#">
                  Bebidas blancas
                </a>
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
