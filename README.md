Rick & Morty – Context vs Redux vs Zustand

Ce projet implémente la même application de personnages Rick & Morty en utilisant trois approches différentes pour gérer le state global :

React Context

Redux Toolkit

Zustand

Cela permet de comparer comment l’état est géré, mis à jour et consommé dans chaque méthode.

🟢 Structure du projet
rick-morty-context-redux-zustand/
│
├─ rick-morty-context/      # Utilise React Context
├─ rick-morty-redux/        # Utilise Redux Toolkit
├─ rick-morty-zustand/      # Utilise Zustand
└─ README.md

⚡ Différences clés
Fonctionnalité	Context API	Redux Toolkit	Zustand
Boilerplate	Minimal	Moyen / plus verbeux	Minimal
Complexité d’installation	Faible	Moyenne	Faible
Courbe d’apprentissage	Facile	Moyenne	Facile
Performance	Peut re-render beaucoup de composants	Optimisé, état prévisible	Optimisé, s’abonne seulement aux slices nécessaires
DevTools	Aucun	Redux DevTools	Minimal DevTools
Utilisation du state global	<Context.Provider>	Store + slices	Hook useStore
🧩 Comment ça fonctionne dans le projet
1️⃣ Context

Utilise React.createContext() pour stocker l’état global.

Les composants s’abonnent via le hook useContext().

Exemple : ContextProvider fournit characters, likedIds et filter globalement.

2️⃣ Redux Toolkit

Utilise createSlice() pour définir les reducers et les actions.

Les composants accèdent au state avec useSelector() et envoient des actions avec useDispatch().

Exemple : charactersSlice gère le fetch des personnages, les likes et le filtrage.

3️⃣ Zustand

Store léger via le hook create().

Les composants s’abonnent uniquement aux parties du state dont ils ont besoin.

Exemple : useCharactersStore gère characters, likedIds, filter et fournit des fonctions comme toggleLike ou getFilteredCharacters().

💡 Observations

Context est simple mais peut provoquer des re-renders inutiles si mal optimisé.

Redux offre plus de structure, utile pour des applications larges avec plusieurs slices.

Zustand est concis, performant et nécessite très peu de boilerplate.


<img width="1319" height="652" alt="mern_context1" src="https://github.com/user-attachments/assets/cf1379d8-796b-4b45-afe1-ee5ba0ccafb4" />

<img width="1322" height="605" alt="zustand" src="https://github.com/user-attachments/assets/9268b336-ff24-4771-84d9-64e1d0ec5bf5" />

<img width="1318" height="688" alt="redux" src="https://github.com/user-attachments/assets/08f774da-5828-4fe3-ae0b-23aafb630b5d" />
