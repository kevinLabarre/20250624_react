function JsxTheorie() {
  const title = "Bienvenue sur React !";

  const welcome = "Bonjour <strong>tout le monde</strong>, et bienvenue !";

  const funcTitle = () => {
    return <p>{title}</p>;
  };

  const img = "../src/assets/react.svg";

  const style = { color: "red", fontSize: "2rem" };

  // const user = {
  //   firstName: "John",
  //   lastName: "Doe",
  // };

  const user = undefined;

  const handleClick = () => {
    alert("J'ai cliqué !");
  };

  return (
    <div>
      <h1>{title}</h1>
      {funcTitle()}
      <img src={img} alt="" />
      <p>{welcome}</p>
      <p dangerouslySetInnerHTML={{ __html: welcome }}></p>

      <p className="" style={{ color: "red", fontSize: "2rem" }}>
        Texte en rouge
      </p>
      <p className="" style={style}>
        Texte en rouge
      </p>

      {user && (
        <p>
          Utilisateur : {user.firstName} , {user.lastName}
        </p>
      )}

      {user ? (
        <p>
          Utilisateur : {user.firstName} , {user.lastName}
        </p>
      ) : (
        <p>Utilisateur non trouvé</p>
      )}

      <button onClick={handleClick}>Cliquez !</button>
      <button onClick={() => alert("j'ai cliqué")}>Cliquez !</button>

      <h2>Mes composants enfants:</h2>
      <ComposantEnfant data="Voici ton texte, mon enfant !">
        {/* Propriété children, la donnée doit être passé entre les balises */}
        TITRE !
      </ComposantEnfant>

      <Children className="myClass" id="myId" color="blue">
        Titre !
      </Children>
    </div>
  );
}
export default JsxTheorie;

const ComposantEnfant = ({ data = "Passe moi un texte !", children }) => {
  return (
    <>
      <h1>{children}</h1>
      <p>{data}</p>
    </>
  );
};

const Children = ({ color, children, ...props }) => {
  return (
    <>
      <h1 style={{ color: color }} {...props}>
        {children}
      </h1>
    </>
  );
};
