import { useState, useReducer } from 'react'

// Der Reducer ist eine Pure funktion. Der hat keine "side effects". D.h. er verändert keine Variablen im globalen Kontext.
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 } // wir returnen uns den jetzigen State
    case 'DECREMENT':
      return { count: state.count - 1 }
    default:
      return state
  }
}
// Switch statement ist logisch äquivalent mit: 
// if(action.type === "INCREMENT") {
//   return { count: state.count + 1 } 
// } else if(action.type === "DECEMENT"){
//   return { count: state.count - 1 }
// } else {
//   return state
// }

function App() {
  // der useReducer Hook gibt uns den momentanen State, und eine dispatch Funktion um den State zu verändern.
  // Und wir geben ihm unsere Reducer funktion und den initialen State.
  const [state, dispatch] = useReducer(counterReducer, {count: 0})

  return (
    <>
      <button onClick={() => dispatch({type: "INCREMENT"})}>+</button>
      <button onClick={() => dispatch({type: "DECREMENT"})}>-</button>
        count is {state.count}
    </>
  )
}

export default App
