import useIncrement from "../hooks/useIncrement";
import useToggle from "../hooks/useToggle";

export const CustomHook = () => {
  const [checked, toggleChecked] = useToggle(true);

  const { count, increment, decrement } = useIncrement({ min: 0 });

  return (
    <>
      <h1>Les hooks personnalisés</h1>
      <a href="https://usehooks.com/" className="underline">
        Plein de hooks personnalisé ici !!
      </a>
      <h2>Cas de figure n°1</h2>
      <p>
        Dans une appli react, on peut souvent avoir besoin de faire varier un
        valeur entre vrai et faux (case à cocher). Par exemple, afficher/masquer
        un/des élément(s). Pour cela, on peut mettre en place un
        hookPersonnalisé
      </p>
      <input type="checkbox" checked={checked} onChange={toggleChecked} />
      {checked && <p>ELEMENT AFFICHE / MASQUE</p>}
      <h2>Cas de figure n°2</h2>
      Je veux utiliser un hook personnalisé pour incrémenter / décrémenter une
      valeur
      <p>compteur: {count}</p>
      <button onClick={increment}>incrémenter</button>
      <button onClick={decrement}>décrémenter</button>
    </>
  );
};
