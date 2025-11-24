# Rick & Morty Characters – React + Vite + Zustand

Ce projet est construit avec **React** et **Vite** pour un développement rapide, et utilise **Zustand** pour la gestion globale de l'état.  
Il récupère les personnages depuis l'[API Rick & Morty](https://rickandmortyapi.com/) et permet de :

- Afficher les personnages dans une grille responsive
- Filtrer par statut (Alive, Dead, Unknown)
- Liker les personnages et les afficher dans une sidebar "Favoris"
- Toute la gestion de l'état est faite avec **Zustand**

---

## ⚡ Fonctionnalités

- React 18 + Vite pour un développement rapide avec HMR
- Zustand pour la gestion globale de l'état
- Filtrage des personnages par statut
- Like/unlike des personnages
- Grille responsive
- Design moderne avec Glassmorphism

---

## 📦 Installation

1. Cloner le dépôt :

```bash
git clone https://github.com/yourusername/rick-morty-zustand.git
cd rick-morty-zustand
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
├─ store/
│  └─ useCharactersStore.js
├─ styles/
│  └─ styles.css
├─ App.jsx
└─ main.jsx
🧠 Zustand – Comment ça marche
Zustand est un gestionnaire d'état global léger pour React.
Il permet aux composants de s'abonner à des parties spécifiques de l'état sans utiliser Context API ni Redux.

Exemple
javascript
Copy code
import { create } from 'zustand';

const useStore = create((set, get) => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 }))
}));
create() génère un hook (useStore) utilisable dans n'importe quel composant

set() met à jour l'état

get() permet de lire l'état depuis les fonctions du store

Utilisation dans un composant
javascript
Copy code
function Counter() {
  const count = useStore(state => state.count);
  const increment = useStore(state => state.increment);

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
Les composants se re-render uniquement lorsque la partie de l'état sélectionnée change

Utiliser useMemo pour les calculs dérivés afin d'éviter des problèmes de performance

💡 Utilisation spécifique de Zustand dans ce projet
characters – tous les personnages récupérés de l'API

likedIds – tableau des IDs des personnages likés

filter – filtre courant (all, alive, dead, unknown)

fetchCharacters() – récupère les personnages depuis l'API

toggleLike(id) – like/unlike un personnage

Composants utilisant Zustand :
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

📌 Remarques
Zustand est minimal et facile à intégrer

React + Vite offrent un HMR rapide et une expérience de développement fluide

