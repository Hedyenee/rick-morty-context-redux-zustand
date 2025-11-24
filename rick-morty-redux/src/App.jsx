import Header from './components/Header';
import FilterBar from './components/FilterBar';
import CharacterGrid from './components/CharacterGrid';
import FavoritesSidebar from './components/FavoritesSidebar';


export default function App() {
return (
<>
<Header />
<div className='main-container'>
<div>
<FilterBar />
<CharacterGrid />
</div>
<FavoritesSidebar />
</div>
</>
);
}