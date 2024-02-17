import { Link } from "react-router-dom";
import icono from "../assets/-beer_89775.png";

const Logo = ( {ancho}) => {
  return (
    <Link to={"/"}>
      <img src={icono} alt="cerveza"  width={ancho} />
    </Link>
  );
};

export default Logo;
