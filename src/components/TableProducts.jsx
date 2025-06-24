import axios from "axios";

export const TableProducts = ({ products }) => {
  // Rajouter un bouton pour pouvoir supprimer les produits

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/products/${id}`)
      .then((resp) => console.log(resp.data))
      .catch((e) => console.error(e.message));
  };

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nom</th>
            <th>Prix</th>
            <th>Quantité</th>
            <th>Catégorie</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.number}</td>
              <td>{product.category}</td>
              <button onClick={() => handleDelete(product.id)}>
                supprimer
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
