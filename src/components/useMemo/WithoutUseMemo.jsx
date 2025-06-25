import { useState } from "react";

export const WithoutUseMemo = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const [inputValue, setInputValue] = useState("");

  console.log(
    "Chargement du composant qui n'utilise pas useMemo + recalcul de 'sum'"
  );
  const sum = numbers.reduce((total, currentValue) => total + currentValue);

  const addNumbers = () => {
    setNumbers([...numbers, Math.random() * 10]);
  };

  return (
    <>
      <h1>Sans use mémo</h1>

      <p>Somme: {sum}</p>
      <button onClick={addNumbers}>Ajouter un nombre</button>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </>
  );
};
