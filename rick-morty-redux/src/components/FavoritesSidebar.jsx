import { useSelector, useDispatch } from "react-redux";
import { toggleLike, selectLikedCharacters } from "../store/charactersSlice";


function FavoritesSidebar() {
const dispatch = useDispatch();
const liked = useSelector(selectLikedCharacters);


return (
<div className="favorites-sidebar">
<h2>Favoris ({liked.length})</h2>
{liked.map(char => (
<div key={char.id}>
<img src={char.image} width="40" />
{char.name}
<button onClick={() => dispatch(toggleLike(char.id))}>❌</button>
</div>
))}
</div>
);
}


export default FavoritesSidebar;