import { useQuery } from "@tanstack/react-query";
import ms from 'ms'
import platforms from '../data/platforms';
import APIClient from "../services/api-client";
import type Platform from "../entities/Platform";

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

// const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: apiClient.getAll,
  staleTime: ms('24h'), // 24 hours
  initialData: platforms// Initial data from local file
})

export default usePlatforms;