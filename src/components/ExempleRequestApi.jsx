import axios from "axios";
import { useEffect, useState } from "react";

export const ExempleRequestApi = () => {
  const [products, setProducts] = useState([]);

  const loadProducts = () => {
    axios
      .get("http://localhost:3001/products")
      .then((resp) => {
        setProducts(resp.data);
        console.log(resp);
        console.log("Données reçues", resp.data);
      })
      .catch((err) => console.log(err));
  };

  const loadProductAsync = async () => {
    try {
      const products = await axios.get("http://localhost:3001/products");
      setProducts(products.data);
      console.log(products);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    loadProducts();
    loadProductAsync();
  }, []);

  return (
    <>
      <h2>Exemples</h2>
    </>
  );
};
