import { useCharacters } from "../context/CharactersContext";
import CharacterCard from "./CharacterCard";

function CharacterGrid() {
  const { getFilteredCharacters, loading } = useCharacters();

  if (loading) {
    return <div className="loading">Chargement...</div>;
  }

  const characters = getFilteredCharacters();

  return (
    <div className="character-grid">
      {characters.map((char) => (
        <CharacterCard key={char.id} character={char} />
      ))}
    </div>
  );
}

export default CharacterGrid;
