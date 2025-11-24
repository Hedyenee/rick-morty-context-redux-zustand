import { useEffect, useMemo } from 'react';
import useCharactersStore from '../store/useCharactersStore';
import CharacterCard from './CharacterCard';

function CharacterGrid() {
  const loading = useCharactersStore(state => state.loading);
  const fetchCharacters = useCharactersStore(state => state.fetchCharacters);
  const characters = useCharactersStore(state => state.characters);
  const filter = useCharactersStore(state => state.filter);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  // useMemo pour éviter recalcul infini
  const filteredCharacters = useMemo(() => {
    if(filter === 'all') return characters;
    return characters.filter(c => c.status.toLowerCase() === filter);
  }, [characters, filter]);

  if (loading) return <div className="loading">Chargement...</div>;

  return (
    <div className="character-grid">
      {filteredCharacters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default CharacterGrid;
