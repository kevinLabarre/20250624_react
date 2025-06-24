import { ExempleRequestApi } from "./ExempleRequestApi";

export const RequestApi = () => {
  return (
    <>
      <h1>Les requêtes</h1>
      <h2>Rappel</h2>
      <p>
        <a
          className="underline"
          href="https://developer.mozilla.org/fr/docs/Web/HTTP/Methods"
        ></a>
      </p>
      <strong>En résumé: </strong>.
      <ul className="pl-5 list-dics pb-5">
        <li>
          <strong>GET: </strong> Sert à récupérer des données
        </li>
        <li>
          <strong>POST: </strong> Utilisé avec un body, très souvent en JSON (ou
          xml sur d'anciennes appli.) Très utilisé pour les 'CREATE', en
          envoyant un objet dnas le 'body' de la requête
        </li>
        <li>
          <strong>PUT: </strong> Meme logique que le post à la différence qu'on
          l'utilise pour mettre àjour une ressource
        </li>
        <li>
          <strong>DELETE: </strong> Utilisé pour supprimer une ressource. (En
          général, il existe des méthode 'DeleteById' sur les API backend)
        </li>
      </ul>
      <h2>Les requêtes avec Axios</h2>
      <a href="https://axios-http.com/fr/docs/example">documentation axios</a>
      <ExempleRequestApi />
    </>
  );
};
