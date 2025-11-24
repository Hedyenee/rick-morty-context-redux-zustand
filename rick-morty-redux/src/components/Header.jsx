import { useSelector } from "react-redux";


function Header() {
const likedCount = useSelector(state => state.characters.likedIds.length);


return (
<header className="header">
<h1>Rick & Morty - Redux</h1>
<div className="likes-badge">{likedCount} favoris</div>
</header>
);
}


export default Header;