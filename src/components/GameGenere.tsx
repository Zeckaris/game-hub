import useGeneres from "../hook/useGeneres";

function GameGenere() {
  const { genere, setGenere, errorGenere, setErrorGenere } = useGeneres();
  return (
    <div>
      {errorGenere && <span>{errorGenere}</span>}
      <ul>
        {genere.map((g) => (
          <li key={g.id}>{g.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default GameGenere;
