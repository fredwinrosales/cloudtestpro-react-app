import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex gap-8 mb-6">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="w-24 h-24" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="w-24 h-24" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Vite + React + Tailwind</h1>
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <button 
          onClick={() => setCount((count) => count + 1)} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          count is {count}
        </button>
        <p className="text-gray-700">
          Edita <code className="bg-gray-200 px-1 py-0.5 rounded">src/App.jsx</code> y guarda para probar HMR
        </p>
      </div>
      <p className="mt-6 text-gray-500">
        Haz clic en los logos para aprender más
      </p>
    </div>
  )
}

export default App
