import React, { useState } from 'react'
import { useScores } from 'react-sports-hooks'
import 'react-sports-hooks/dist/index.css'

const App = () => {
  const [sport, setSport] = useState<'mlb' | 'nba' | 'nfl'>('mlb')
  const { scores } = useScores(sport, { updateIntervalSeconds: 5 })

  return (
    <div>
      check console
      <button onClick={() => setSport('mlb')}>mlb</button>
      <button onClick={() => setSport('nfl')}>nfl</button>
      <button onClick={() => setSport('nba')}>nba</button>
    </div>
  )
}

export default App
