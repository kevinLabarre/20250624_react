function TableProducts({ products, afficherHorsStock, searchValue }) {
  return (
    <>
      {products
        .filter(
          (product) =>
            (afficherHorsStock ? true : product.number > 0) &&
            product.name.toLowerCase().includes(searchValue.toLowerCase())
        )
        .map((product, index) => (
          <ul key={index}>
            <li>{product.name}</li>
            <li>prix : {product.price}</li>
            <li>quantité: {product.number}</li>
            <li>catégorie: {product.category}</li>
          </ul>
        ))}
    </>
  );
}

export default TableProducts;
