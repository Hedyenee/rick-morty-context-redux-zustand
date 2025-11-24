import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../store/charactersSlice";


function CharacterCard({ character }) {
const dispatch = useDispatch();
const likedIds = useSelector(state => state.characters.likedIds);
const isLiked = likedIds.includes(character.id);


return (
<div className="character-card">
<button onClick={() => dispatch(toggleLike(character.id))}>
{isLiked ? "💖" : "🤍"}
</button>
<img src={character.image} alt={character.name} />
<h3>{character.name}</h3>
<p>{character.status} - {character.species}</p>
</div>
);
}


export default CharacterCard;