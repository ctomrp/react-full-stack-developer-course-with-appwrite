import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState('salmon')

  return (
    <div className="w-full h-screen duration-200" style={{
      backgroundColor: color
    }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          className='outline-none px-4 py-1 rounded-full text-gray-600 shadow-lg'
          onClick={()=>setColor('lightblue')}
          style={{
            background: 'lightblue'
          }}
          >test</button>
          <button
          className='outline-none px-4 py-1 rounded-full text-gray-600 shadow-lg'
          onClick={()=>setColor('lightgreen')}
          style={{
            backgroundColor: 'lightgreen'
          }}
          >test 2</button>
        </div>
      </div>
    </div>
  )
}

export default App
