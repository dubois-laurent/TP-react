#  Exercice – Explication de code et utilisation des Hooks

## Partie 1 – Compréhension du code

Voici un code que vous devez **analyser et expliquer**, en vous appuyant sur le cours et la documentation de React.

---

```html
<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>React – useEffect & useState</title>

  <!-- React, ReactDOM et Babel -->
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

  <!-- TailwindCSS -->
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-slate-900 text-white min-h-screen flex flex-col items-center justify-center p-4">
  <h1 class="text-3xl font-bold mb-6">Suivi de température</h1>
  <div id="root" class="w-full max-w-xl"></div>

  <script type="text/babel">
    const { useState, useEffect } = React;

    function Counter() {
      const [count, setCount] = useState(0);

      useEffect(() => {
        console.log("MONTAGE / MISE À JOUR :", count);

        // Fonction de nettoyage (appelée au démontage)
        return () => {
          console.log("NETTOYAGE :", count);
        };
      });

      return (
        <React.Fragment>
          <p>Compteur : {count}</p>
          <button
            onClick={() => setCount(count + 1)}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded mt-2"
          >
            +1
          </button>
        </React.Fragment>
      );
    }

    function App() {
      const [status, setStatus] = useState(true);

      return (
        <div className="bg-slate-800 p-4 rounded-xl shadow-lg">
          <button
            onClick={() => setStatus(!status)}
            className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded mb-4"
          >
            Changer le statut
          </button>

          {status && <Counter />}
        </div>
      );
    }

    ReactDOM.createRoot(document.getElementById("root")).render(<App />);
  </script>
</body>
</html>
```

---

### ✏️ Travail demandé

1. **Expliquez le fonctionnement du code** :

   * Quel est le rôle de `useState` dans `Counter` et `App` ?

   Le Hook useState possède deux rôles différents pour chaque fonctions. Dans `Counter` : il gère la variable d'état du compteur en Integer. Dans `App` il gère la variable d'état d'un statut, en Boolean (true / false).

   * À quoi sert `useEffect` ici ?

   Le useEffect ici nous permet de voir quand est-ce que ce dernier est appelé (Initialisation OU lorsqu'il y a changement d'état) 

   * Quand la fonction de nettoyage est-elle appelée ?

   Elle est appellée lors de chaque rendu et appelée seule lors du démontage du composant Counter.

   * Que se passe-t-il quand on clique sur "Changer le statut" ?

   Cela active la propriété `onCLick`du bouton qui demande à la variable d'état status, qui est un boolean de passer à son inverse ( True => False ou False => True ). Cela a pour effet de monter ou démonter le composant `Counter` qui se monte seulement lorsque le status est en True.

   * Quelle est la différence entre le **montage**, la **mise à jour**, et le **démontage** du composant `Counter` ?

   Le montage correspond à l'initalisation du composant, au premier render de l'élément. La mise à jour correspond au re-render du composant lorsqu'il y a un changement d'état de la varible ciblée par le hook (ou re-render général lorsque pas dépendance). Le démontage représente la suppression (affichage) du composant.
1
2. Appuyez-vous sur les concepts vus en cours :

   * Le cycle de vie d'un composant fonctionnel.

   C'est ce que représente un composant qui se monte, se met à jour et se démonte selon des effets ou conséquences définies.

   * Le comportement de `useEffect` à chaque rendu.

   Le hook est appelé a chaque rendu ici, la fonction de nettoyage aussi à chaque rendu. Cependant lorsque l'on veut changer de status et donc démonter le composant, useEffect renvoie seulement la fonction de nettoyage.

---

## Partie 2 – Exemple d'utilisation de `useReducer`

Donnez un **exemple simple** d'un composant React utilisant le hook `useReducer` pour gérer un compteur, `useReducer` est un super `useState`
Vous pouvez vous inspirer de ce modèle :

```jsx
import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    // TODO 
    default:
      return state;
  }
}

export default function CounterReducer() {

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="p-4 bg-slate-800 rounded-lg text-white">
    
    </div>
  );
}
```
