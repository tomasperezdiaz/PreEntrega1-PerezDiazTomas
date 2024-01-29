import { Link } from "react-router-dom";
import icono from "../assets/-beer_89775.png";

const Logo = () => {
  return (
    <Link to={"/"}>
      <img src={icono} alt="cerveza" width={70} />
    </Link>
  );
};

export default Logo;
