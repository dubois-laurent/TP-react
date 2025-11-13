import './App.css'
import { useCounter } from './stores/useCounter'

function App() {
  const { count, increment, decrement } = useCounter()

  return (
    <>
      <div>
        <span>{count}</span>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </>
  )
}

export default App
