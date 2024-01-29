const ItemList = ({ items }) => {
  return (
    <div>
      { items.map((item) => {
          return (
            <div key={item.titulo} className="container mt-3">
              <div className="row">
                <div className="col-md-4">
                  <img className="card" src={item.img} width={120} alt={item.titulo} />
                  <h2 className="card-title"> {item.titulo}</h2>
                  <p>Precio: ${item.precio}</p>
                  <p>Categoria: {item.categoria.id} </p>
                  <a className="detalle" href={`/item/${item.id}`}>Ver mas</a>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ItemList;
