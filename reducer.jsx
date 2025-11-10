import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case 'increment_xp':
      return { 
        class: state.class, 
        level: state.level, 
        xp: state.xp + action.increment
      }
    case 'level_up':
      return { 
        class: state.class, 
        level: state.level + 1, 
        xp: 0
      }
    case 'change_class':
      return {
        class: action.nextClass,
        level: 1,
        xp: 0,
      }""
    default:
      return state;
  }
}

function CounterReducer() {

  const [state, dispatch] = useReducer(reducer, { class: 'warrior', level: 1, xp: 0 });
  const [error, setError] = React.useState(null);

  function handleIncrementXP() {
    dispatch({ 
      type: 'increment_xp',
       increment: 10 
    });
  }

  function handleLevelUp() {
    if (state.xp >= 100) {
      dispatch({ 
        type: 'level_up' });
    }
  }

  function handleChangeClass(e) {
    dispatch({
      type: 'change_class',
      nextClass: e.target.value
    });
  }
  return (
    <div className="bg-slate-800 text-white">
      <h1>Class: {state.class}</h1>
      <h2>Level: {state.level}</h2>
      <h3>XP: {state.xp}</h3>
      <button onClick={handleIncrementXP}>Increment XP</button>
      <button onClick={handleLevelUp}>Level Up</button>
      <select value={state.class} onChange={handleChangeClass}>
        <option value="warrior">Warrior</option>
        <option value="mage">Mage</option>
        <option value="rogue">Rogue</option>
      </select>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}


function App () {
  return (
    <div className="bg-slate-800 text-white">
      <CounterReducer />
    </div>
  );
}

export default App;