import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import ChatbotWindow from './components/ChatbotWindow';
import pokeball from './assets/pokeball.png';
import oak from './assets/oak.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.pokemon.com/us" target="_blank">
          <img src={pokeball} className="logo react" alt="React logo" />
        </a>
        <img src={oak} height={150} />
      </div>
      <h1>Oak The ChatBot</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          <img src={pokeball} width={16} height={16} />
          Captured Pokemon: {count}
        </button>
        <p>
          All trainers need companions, and I'm here to help you on your journey.
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Pokeball to learn more
      </p>
      <ChatbotWindow />
    </>
  )
}

export default App
