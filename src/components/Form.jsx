import { useState } from "react";
import { FormWithReactHookForm } from "./FormWithReactHookForm";

function Form() {
  const [name, setName] = useState("");

  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    console.log(e);
    setName(e.target.value);
  };

  return (
    <>
      <h1>Les formulaires</h1>
      <h2>Les champs controlés</h2>
      <p>
        En react, nous avons un concept que nous pouvons appeler les champs
        contrôlés. En utilisant le <strong>onChange()</strong> d'une input et le
        hook useState(). Ainsi, nous pouvons mettre à jour une variable lié à
        l'input à chaque changment (donc à chasque fois qu'un caractère est
        ajouté ou supprimé).
      </p>
      <h2>Exemple :</h2>
      <input type="text" onChange={handleChange} value={name} />
      <p>{name}</p>

      <input
        type="checkbox"
        onChange={(e) => setChecked(e.target.checked)}
        checked={checked}
      />
      {checked && <p>Case cochée !</p>}
      {checked ? <p>Case cochée !</p> : <p>Case non cochée !</p>}

      <h2>Les formulaires avec React-hook-form</h2>
      <FormWithReactHookForm />
    </>
  );
}

export default Form;
