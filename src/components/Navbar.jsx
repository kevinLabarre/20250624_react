import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section>
      <nav>
        <Link to="/">Accueil </Link>
        <Link to="/hook-use-state">useState </Link>
        <Link to="/hook-use-effect">useEffect </Link>
        <Link to="/formulaire">les formulaires</Link>
        <Link to="/liste">les listes</Link>
        <Link to="/requete-api">les Requetes Http</Link>
        <Link to="/flux">les Flux</Link>
        <Link to="/hook-perso">les Hooks perso.</Link>
        <Link to="/hook-use-memo">useMemo</Link>
        <Link to="/exercice">exercice</Link>
      </nav>
    </section>
  );
}

export default Navbar;
