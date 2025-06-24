import { useState } from "react";

function HookUseState() {
  console.log("Chargement du composant");

  // Repasse à 0 à chaque fois qu'on appellera un setter d'un 'useState' dans ce composant
  let count = 0; // Variable 'statique' dans le sens où elle ne changera jamais au niveau de l'afficahge sur le navigateur

  const [count2, setCount2] = useState(0);

  const increment = () => {
    count++;

    // Increment du useState:
    setCount2((prevValue) => prevValue + 1); // Pour calculer le nouvel état en fonction de la valeur de l'état précédent
  };

  return (
    <>
      <h1>Le hook useState</h1>
      <p>Count: {count}</p>
      <p>Count avec useState: {count2}</p>
      <button onClick={increment}>+</button>
      <button onClick={() => setCount2(0)}>Reset</button>
    </>
  );
}

export default HookUseState;

// On peut regrouper nos 'useState' comme ci-dessous:
function Test() {
  const [counts, setCounts] = useState({
    count1: 0,
    count2: 0,
    count3: 0,
  });
}
