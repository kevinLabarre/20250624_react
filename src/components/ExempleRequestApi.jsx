import axios from "axios";
import { useEffect, useState } from "react";
import { TableProducts } from "./TableProducts";

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

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newProduct = {
      name: formData.get("name"),
      price: formData.get("price"),
      number: formData.get("number"),
      category: formData.get("category"),
    };

    axios
      .post("http://localhost:3001/products", newProduct)
      .then((resp) => setProducts((prev) => [...prev, resp.data]))
      .catch((e) => console.error(e.message));
  }

  return (
    <>
      <h2>Exemples</h2>
      <TableProducts products={products} />

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="nom" name="name" />
        <input type="number" placeholder="prix" name="price" />
        <input type="text" placeholder="quantité" name="number" />
        <input type="text" placeholder="catégorie" name="category" />

        <button type="submit">Ajouter le produit</button>
      </form>
    </>
  );
};
