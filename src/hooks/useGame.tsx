import { useQuery } from "@tanstack/react-query"
import type Game from "../entities/Game"
import APIClient from "../services/api-client"
export interface Genre {
  id: number,
  name: string,
  slug: string,
  image_background: string,
}

const apiClient = new APIClient<Game>('/games')

// const useGenre = () => useData<Genre>("genres")
const useGame = (slug: string) => useQuery({
  queryKey: ['games', slug],
  queryFn: () => apiClient.get(slug),
})

export default useGame