
function UserFavoriteAnimals(props) {
  return (
    <div>
      <h4>Favorite Animals:</h4>

      <ul>
        {props.favAnimals.map((animal) => (
          <li key={animal}>{animal}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserFavoriteAnimals;
