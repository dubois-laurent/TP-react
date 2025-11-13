import { useReducer, useState, useEffect } from 'react'
import LedPanel from './components/LedPanel'
import BlueLedPanel from './components/BonusBlueLed'


const initialState = { initialColor: "red", previous: "", next: "", activeColor: "" , statusCounter: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'reset' : {
      return { ...state, 
        initialColor: action.initialColor,
        activeColor: action.initialColor}
    }
    case 'previous' : {
      return { ...state, 
        previous: action.value,
        activeColor: state.previous === 'red' ? 'green' : state.previous === 'yellow' ? 'red' : state.previous === 'green' ? 'yellow' : ''
      }
    }
    case 'next' : {
      return {
        ...state,
        next: action.value,
        activeColor: state.next === 'red' ? 'yellow' : state.next === 'yellow' ? 'green' : state.next === 'green' ? 'red' : ''
      }
    }
    case 'statusCounter' : {
      return { ...state, statusCounter: state.statusCounter + 1 }
    }
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [statusCounter, setStatusCounter] = useState(true)

  useEffect(() => {
    dispatch({ type: 'statusCounter' })
  }, [statusCounter])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100">
      <div className="space-y-8">
        <LedPanel active={state.activeColor} />
        <BlueLedPanel active={statusCounter} />
        <div className="flex gap-4 justify-center">
          <button
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium"
            onClick={() => dispatch({ type: 'previous', value: state.activeColor })}
          >
            PREV
          </button>
          <button
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium"
            onClick={() => dispatch({ type: 'reset', initialColor: 'red' })}
          >
            RESET
          </button>
          <button
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium"
            onClick={() => dispatch({ type: 'next', value: state.activeColor })}
          >
            NEXT
          </button>
          <button
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium"
            onClick={() => setStatusCounter(!statusCounter)}
          >
            STATUS COUNTER ({statusCounter ? state.statusCounter : 0})
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
