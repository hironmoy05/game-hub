import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/api-client"
import genres from "../data/genres"
export interface Genre {
  id: number,
  name: string,
  slug: string,
  image_background: string,
}

const apiClient = new APIClient<Genre>('/genres')

// const useGenre = () => useData<Genre>("genres")
const useGenre = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.getAll,
  staleTime: 24 * 60 * 60 * 1000, // 24 hours
  initialData: {count: genres.length, results: genres} // Initial data from local file
})

export default useGenre