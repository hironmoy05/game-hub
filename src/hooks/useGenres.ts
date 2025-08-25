import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/api-client"
import ms from 'ms'
import genres from "../data/genres"
import type Genre from "../entities/Genre"

const apiClient = new APIClient<Genre>('/genres')

// const useGenre = () => useData<Genre>("genres")
const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.getAll,
  staleTime: ms('24h'), // 24 hours
  initialData: genres // Initial data from local file
})

export default useGenres