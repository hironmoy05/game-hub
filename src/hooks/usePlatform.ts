import useGenre from "./useGenres"

const usePlatform = (id?: number) => {
  const { data: genres } = useGenre()
  return genres?.results.find(g => g.id === id)
}

export default usePlatform