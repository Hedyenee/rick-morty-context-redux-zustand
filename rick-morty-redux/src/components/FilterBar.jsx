import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../store/charactersSlice";


function FilterBar() {
const dispatch = useDispatch();
const filter = useSelector(state => state.characters.filter);
const filters = ["all", "alive", "dead", "unknown"];


return (
<div className="filter-bar">
{filters.map(f => (
<button
key={f}
className={filter === f ? "active" : ""}
onClick={() => dispatch(setFilter(f))}
>
{f}
</button>
))}
</div>
);
}


export default FilterBar;