import { useMemo } from 'react';
import useCharactersStore from '../store/useCharactersStore';

function FavoritesSidebar() {
  const characters = useCharactersStore(state => state.characters);
  const likedIds = useCharactersStore(state => state.likedIds);
  const toggleLike = useCharactersStore(state => state.toggleLike);

  // useMemo pour éviter recalcul infini
  const likedCharacters = useMemo(() => {
    return characters.filter(char => likedIds.includes(char.id));
  }, [characters, likedIds]);

  return (
    <div className="favorites-sidebar">
      <h2>Mes Favoris ({likedCharacters.length})</h2>

      {likedCharacters.length === 0 ? (
        <p style={{ color: '#95a5a6' }}>Aucun favori</p>
      ) : (
        likedCharacters.map(character => (
          <div key={character.id} className="favorite-item">
            <img src={character.image} alt={character.name} />
            <span>{character.name}</span>
            <button onClick={() => toggleLike(character.id)}>❌</button>
          </div>
        ))
      )}
    </div>
  );
}

export default FavoritesSidebar;
