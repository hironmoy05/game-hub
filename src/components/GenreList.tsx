import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react"
import useData from "../hooks/useData"
import type { Genre } from "../hooks/useGenre"
import getCroppedImageUrl from "../services/image-url"
interface Props {
  onSelectGenre: (genre: Genre) => void
  selectedGenre: Genre | null
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data: genres, error, isLoading } = useData<Genre>("genres")

  if (error) return null
  if (isLoading) return < Spinner />

  return (
    <List>
      {
        genres.map((genre) => {
          return (
            <ListItem key={genre.id} paddingY='5px'>
              <HStack key={genre.id}>
                <Image src={getCroppedImageUrl(genre.image_background)} alt={genre.name} boxSize='32px' borderRadius={8} />
                <Button onClick={() => onSelectGenre(genre)} variant='link' fontWeight={selectedGenre?.id == genre.id ? 'bold' : "normal"} color={selectedGenre?.id == genre.id ? 'gray.100' : 'gray.600'}>
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          )
        })
      }
    </List >
  )
}

export default GenreList