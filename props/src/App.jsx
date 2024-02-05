import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PlayersList from './PlayersList'

//players cards//

function App() {
  return (
    <>
      <div className="App">
        <h1>FIFA Player Cards</h1>
        <PlayersList />
      </div>
    
  </>
  )
}

export default App
