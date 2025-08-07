import useData from "../hooks/useData"
import type { Genre } from "../hooks/useGenre"

const GenreList = () => {
  const { data: genres } = useData<Genre>("genres")

  return (
    <ul>
      {
        genres.map((genre) => <li key={genre.id}>{genre.name}</li>)
      }
    </ul>
  )
}

export default GenreList