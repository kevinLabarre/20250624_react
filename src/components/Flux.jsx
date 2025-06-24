import { useState } from "react";

export const Flux = () => {
  const [checked, setChecked] = useState(true);

  return (
    <>
      <h1>Les flux de données</h1>

      <h2>De parent vers enfant: </h2>
      <p>
        Pour faire passer des données d'un composant parent vers le composant
        enfant, nous devons utiliser les 'props'. Exemple:
      </p>

      <h2>De enfant vers parent: </h2>
      <p>
        Il est cournat d'utiliser des fonctions de rappel (callback functions)
        passées en tant que props du parent vers l'enfant. Ces fonctions sont
        ensuite appelées dans le composant enfant pour transmettre des données
        au parent
      </p>

      <ComposantEnfant data="Tiens, voici tes données !" />

      <CheckboxEnfant checked={checked} onCheck={setChecked} />
      {checked ? <p>Je suis coché</p> : <p>Je suis non coché</p>}
    </>
  );
};

const ComposantEnfant = ({ data }) => {
  return <p>Composant enfant, donnée passée: {data}</p>;
};

const CheckboxEnfant = ({ checked, onCheck }) => {
  return (
    <>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onCheck(e.target.checked)}
      />
    </>
  );
};
