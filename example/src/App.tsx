import React from 'react'
import { useScores } from 'react-sports-hooks'
import 'react-sports-hooks/dist/index.css'

const App = () => {
  const { scores } = useScores('mlb')
  console.log(scores)
  return <div>{JSON.stringify(scores, null, 4)}</div>
}

export default App
