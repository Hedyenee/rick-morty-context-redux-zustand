/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";

const CharactersContext = createContext();

export const useCharacters = () => {
  const context = useContext(CharactersContext);
  if (!context) {
    throw new Error("useCharacters must be used within CharactersProvider");
  }
  return context;
};

export const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [likedIds, setLikedIds] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  // Charger l'API
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
        setLoading(false);
      });
  }, []);

  // Like / Unlike
  const toggleLike = (id) => {
    setLikedIds((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
    );
  };

  // Personnages likés
  const getLikedCharacters = () =>
    characters.filter((char) => likedIds.includes(char.id));

  // Filtrage
  const getFilteredCharacters = () => {
    if (filter === "all") return characters;
    return characters.filter(
      (char) => char.status.toLowerCase() === filter
    );
  };

  const value = {
    characters,
    likedIds,
    filter,
    loading,
    toggleLike,
    setFilter,
    getLikedCharacters,
    getFilteredCharacters,
  };

  return (
    <CharactersContext.Provider value={value}>
      {children}
    </CharactersContext.Provider>
  );
};
