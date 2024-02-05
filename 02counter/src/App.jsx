import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addValue = ()=>{
    setCounter(counter + 1)
    // react no envia de inmediacion la accion indicada, sino que las reune y envía todas en un lote
    // por eso al poner varios setCounter el valor incrementado sigue siendo 1
    // si se desea evitar ese comportamiento, se puede usar el callback de setCounter
    // setCounter((prevCounter)=>prevCounter + 1)
    // setCounter((prevCounter)=>prevCounter + 1)
    // setCounter((prevCounter)=>prevCounter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
  }

  const removeValue = ()=>{
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>React course</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={removeValue}>Remove value</button>
      <p>footer: </p>
    </>
  )
}

export default App
