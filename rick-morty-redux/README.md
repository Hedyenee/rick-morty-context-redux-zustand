# Rick & Morty Characters – React + Vite + Redux Toolkit

Ce projet est construit avec **React** et **Vite** pour un développement rapide, et utilise **Redux Toolkit** pour la gestion globale de l'état.  
Il récupère les personnages depuis l'[API Rick & Morty](https://rickandmortyapi.com/) et permet de :

- Afficher les personnages dans une grille responsive
- Filtrer par statut (Alive, Dead, Unknown)
- Liker les personnages et les afficher dans une sidebar "Favoris"
- Toute la gestion de l'état est faite avec **Redux Toolkit**

---

## ⚡ Fonctionnalités

- React 18 + Vite pour un développement rapide avec HMR
- Redux Toolkit pour la gestion globale de l'état
- Filtrage des personnages par statut
- Like/unlike des personnages
- Grille responsive
- Design moderne avec Glassmorphism

---

## 📦 Installation

1. Cloner le dépôt :

```bash
git clone https://github.com/yourusername/rick-morty-redux.git
cd rick-morty-redux
Installer les dépendances :

bash
Copy code
npm install
Lancer l'application en mode développement :

bash
Copy code
npm run dev
Ouvrir le navigateur à http://localhost:5173

📝 Structure du projet
css
Copy code
src/
├─ components/
│  ├─ Header.jsx
│  ├─ FilterBar.jsx
│  ├─ CharacterGrid.jsx
│  ├─ CharacterCard.jsx
│  └─ FavoritesSidebar.jsx
├─ redux/
│  ├─ store.js
│  └─ charactersSlice.js
├─ styles/
│  └─ styles.css
├─ App.jsx
└─ main.jsx
🧠 Redux Toolkit – Comment ça marche
Redux Toolkit est une solution moderne et simplifiée pour Redux.
Elle permet de gérer l'état global de l'application de manière prévisible et performante.

Exemple de slice
javascript
Copy code
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += 1 },
    decrement: state => { state.value -= 1 },
  }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
Utilisation dans un composant
javascript
Copy code
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './counterSlice';

function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}
useSelector permet de lire l'état global

useDispatch permet de lancer des actions

Redux Toolkit simplifie la création des reducers et des actions

Les composants se re-render uniquement lorsque les valeurs du store qu'ils utilisent changent

💡 Utilisation spécifique Redux dans ce projet
characters – tous les personnages récupérés de l'API

likedIds – tableau des IDs des personnages likés

filter – filtre courant (all, alive, dead, unknown)

fetchCharacters() – récupère les personnages depuis l'API

toggleLike(id) – like/unlike un personnage

Composants utilisant Redux :
Header.jsx – affiche le nombre total de personnages likés

FilterBar.jsx – permet de filtrer les personnages

CharacterGrid.jsx – affiche les personnages filtrés

CharacterCard.jsx – bouton like/unlike pour chaque personnage

FavoritesSidebar.jsx – affiche les personnages likés
```
