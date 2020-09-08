import { useEffect, useState } from 'react'
import { fetchScores } from './lib/fetchScores'

interface Options {
  updateIntervalSeconds?: number
}

type Sport = 'mlb' | 'nba' | 'nfl'

export const useScores = (sport: Sport, options?: Options) => {
  const updateIntervalSeconds = options?.updateIntervalSeconds || 30
  const [scores, setScores] = useState([])

  useEffect(() => {
    const getSport = async () => {
      const sportsScores: any = await fetchScores(sport)
      setScores(sportsScores)
    }

    getSport()
    setInterval(getSport, 1000 * updateIntervalSeconds)
  }, [])

  return {
    scores
  }
}
