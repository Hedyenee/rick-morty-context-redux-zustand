# Rick & Morty Characters – React + Vite + Context API

Ce projet est construit avec **React** et **Vite** pour un développement rapide, et utilise **Context API** pour la gestion globale de l'état.  
Il récupère les personnages depuis l'[API Rick & Morty](https://rickandmortyapi.com/) et permet de :

- Afficher les personnages dans une grille responsive
- Filtrer par statut (Alive, Dead, Unknown)
- Liker les personnages et les afficher dans une sidebar "Favoris"
- Toute la gestion de l'état est faite avec **Context API**

---

## ⚡ Fonctionnalités

- React 18 + Vite pour un développement rapide avec HMR
- Context API pour la gestion globale de l'état
- Filtrage des personnages par statut
- Like/unlike des personnages
- Grille responsive
- Design moderne avec Glassmorphism

---

## 📦 Installation

1. Cloner le dépôt :

```bash
git clone https://github.com/yourusername/rick-morty-context.git
cd rick-morty-context
Installer les dépendances :

bash
Copy code
npm install
Lancer l'application en mode développement :

bash
Copy code
npm run dev
Ouvrir le navigateur à http://localhost:5173

---
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
├─ context/
│  └─ CharactersContext.jsx
├─ styles/
│  └─ styles.css
├─ App.jsx
└─ main.jsx
🧠 Context API – Comment ça marche
Context API est une solution native de React pour partager de l’état global entre composants.
Elle permet d’éviter de passer des props de parent à enfant sur plusieurs niveaux.

Exemple
javascript
Copy code
import { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);

  return (
    <CounterContext.Provider value={{ count, increment }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  return useContext(CounterContext);
}
Utilisation dans un composant
javascript
Copy code
function Counter() {
  const { count, increment } = useCounter();

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
Les composants qui consomment le contexte se re-render lorsque la valeur du contexte change

Context API est parfait pour un état global simple, mais pour des états très complexes, on peut préférer des solutions comme Zustand ou Redux

💡 Utilisation spécifique dans ce projet
characters – tous les personnages récupérés de l'API

likedIds – tableau des IDs des personnages likés

filter – filtre courant (all, alive, dead, unknown)

fetchCharacters() – récupère les personnages depuis l'API

toggleLike(id) – like/unlike un personnage

Composants utilisant le contexte :
Header.jsx – affiche le nombre total de personnages likés

FilterBar.jsx – permet de filtrer les personnages

CharacterGrid.jsx – affiche les personnages filtrés

CharacterCard.jsx – bouton like/unlike pour chaque personnage

FavoritesSidebar.jsx – affiche les personnages likés

🎨 CSS & Design
Grille responsive avec auto-fill cards

Effet hover sur les cartes

Glassmorphism pour le header et la sidebar

Fond dégradé moderne

Entièrement responsive

```
