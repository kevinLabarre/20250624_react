function List() {
  const users = [
    { id: 1, name: "John", age: 30, city: "New York" },
    { id: 2, name: "Jane", age: 25, city: "Los Angeles" },
    { id: 3, name: "Bob", age: 40, city: "Chicago" },
  ];

  const legumes = ["carottes", "oignons", "poivrons"];

  return (
    <>
      <h1>Les listes</h1>

      {users.map((user) => (
        <ul key={user.id}>
          <li>nom: {user.name}</li>
          <li>age: {user.age}</li>
          <li>Ville: {user.city}</li>
        </ul>
      ))}

      <ul>
        {legumes.map((l, index) => (
          <li key={index}>{l}</li>
        ))}
      </ul>
    </>
  );
}

export default List;
