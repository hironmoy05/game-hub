import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { Text } from "@chakra-ui/react"

interface Games {
  id: number,
  name: string,
}

interface FetchGamesResult {
  count: number,
  results: Games[]
}

const GameGrid = () => {
  const [games, setGames] = useState<Games[]>([])
  const [error, setError] = useState("")

  useEffect(() => {
    apiClient.get<FetchGamesResult>("games")
      .then(res => setGames(res.data.results))
      .catch(err => setError(err.message))
  }, [])

  return (
    <>
      {error && <Text color='red'>{error}</Text>}
      <ul>
        {
          games?.map(game => <li key={game.id}>{game.name}</li>)
        }
      </ul >
    </>
  )
}

export default GameGrid