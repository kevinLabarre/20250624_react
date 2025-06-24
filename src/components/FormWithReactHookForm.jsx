import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const FormWithReactHookForm = () => {
  const [newProduct, setNewProduct] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submit(data) {
    axios
      .post("http://localhost:3001/products", data)
      .then((resp) => setNewProduct(resp.data));
  }

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <input
          type="text"
          placeholder="nom"
          {...register("name", {
            required: "Champ name est requis",
            maxLength: {
              value: 10,
              message: "10 caractères maxmimum",
            },
          })}
        />
        <span>{errors.name && errors.name.message}</span>

        <input
          type="number"
          placeholder="prix"
          {...register("price", {
            required: "Champ quantité est requis",
            min: { value: 0, message: "prix ne peut pas être négatif" },
          })}
        />
        <span>{errors.price && errors.price.message}</span>

        <input type="text" placeholder="quantité" {...register("number")} />

        <input type="text" placeholder="catégorie" {...register("category")} />

        <button type="submit">Ajouter le produit</button>
      </form>
      {newProduct && <p>{newProduct.name} a été ajouté</p>}
    </>
  );
};
