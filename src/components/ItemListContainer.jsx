import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const productCollection = collection(db, "productos");
    const q = id
      ? query(productCollection, where("categoria.id", "==", id))
      : productCollection;
    getDocs(q).then((resultado) => {
      setLoading(false);
      setItems(
        resultado.docs.map((producto) => ({
          id: producto.id,
          ...producto.data(),
        }))
      );
    });
  }, [id]);

  return (
    <>
     {loading ? <Loading /> : <ItemList key={items.id} items={items} />} 
    </>
  );
};

export default ItemListContainer;
