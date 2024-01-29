import { useEffect, useState } from "react";
import arrayProductos from "./json/productos.json";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item , setItem] = useState ([]);
    useEffect (() => { const promesa = new Promise((resolve) => {
        setTimeout(() => {
            let producto = arrayProductos.find(item => item.id == 1 )
          resolve(producto);
        }, 2000);
      })
      promesa.then(data => {
        setItem(data);
        console.log(data)
      });
},[])
    return (<>
    <ItemDetail item ={item} /> </>)
}

export default ItemDetailContainer;
