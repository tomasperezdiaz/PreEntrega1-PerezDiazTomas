import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
  return (
    <div className="container ">
    <div className="row ">
      { items.map((item) => {
          return (
            <div key={item.titulo} className=" mt-5 col-md-3 ">
             <img className="card" src={item.img} width={120} alt={item.titulo} />
                  <div>
                  <h2 className="card-title"> {item.titulo}</h2>
                  <p className="pt-2">Categoria: {item.categoria.id}</p>
                  <Link to={"/item/" + item.id } className="detalle text-decoration-none" >
                   Ver mas
                  </Link>
                  </div>
                  </div>
                 );
        })}
    </div>
    </div>
  );
};

export default ItemList;
