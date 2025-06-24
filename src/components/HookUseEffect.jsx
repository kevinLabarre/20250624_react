import { useEffect, useState } from "react";

function HookUseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect avec le compteur");
    document.title = `Count: ${count}`;

    return () => console.log("return du useEffect avec le compteur");
  }, [count]);

  return (
    <div>
      <h1>Le hook UseEffect</h1>
      <ul>
        Le hook useEffect est utilisé:
        <li>pour gérer des effets secondaires dans un composant</li>
        <li>
          pour effectuer des opérations après le rendu du composant (
          <strong>Comme des appels à des API</strong>, la manipulation du DOM,
          la gestion d'abonnement ...)
        </li>
      </ul>
      <p>
        <strong>useEffect()</strong> est très souvent utilisé en conjonction
        avec un useState
      </p>

      <h2>Exemple :</h2>
      <p>Compteur : {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>

      <Exemple />
    </div>
  );
}

export default HookUseEffect;

function Exemple() {
  useEffect(() => {
    console.log("Chargement du composant"); // Avec un tableau de dépendance vide, cette fonction sera appelée une seule fois au chargement du composant

    return () => "Destruction du composant"; // Avec un tableau de dépendance vide, cette fonction sera appelée une seule fois à a destruction du composant
  }, []);
}
