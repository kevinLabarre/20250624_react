import { useMemo, useState } from "react";

export const WithUseMemo = () => {
  console.log("Chargement du composant qui utilise useMemo");

  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const sum = useMemo(() => {
    console.log("Recalcul de la somme");
    return numbers.reduce((total, currentValue) => total + currentValue);
  }, [numbers]);

  const [inputValue, setInputValue] = useState("");

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
