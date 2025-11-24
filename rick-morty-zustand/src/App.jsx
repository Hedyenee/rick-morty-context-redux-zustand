import Header from './components/Header';
import FilterBar from './components/FilterBar';
import CharacterGrid from './components/CharacterGrid';
import FavoritesSidebar from './components/FavoritesSidebar';

function App() {
  return (
    <div>
      <Header />
      <div className="main-container">
        <div style={{ flex: 1 }}>
          <FilterBar />
          <CharacterGrid />
        </div>
        <FavoritesSidebar />
      </div>
    </div>
  );
}

export default App;
