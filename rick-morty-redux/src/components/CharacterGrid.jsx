import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters, selectFilteredCharacters } from "../store/charactersSlice";
import CharacterCard from "./CharacterCard";


function CharacterGrid() {
const dispatch = useDispatch();
const characters = useSelector(selectFilteredCharacters);
const loading = useSelector(state => state.characters.loading);


useEffect(() => {
dispatch(fetchCharacters());
}, []);


if (loading) return <p>Chargement...</p>;


return (
<div className="character-grid">
{characters.map(char => (
<CharacterCard key={char.id} character={char} />
))}
</div>
);
}


export default CharacterGrid;