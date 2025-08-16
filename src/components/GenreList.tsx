import { Button, Heading, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react"
import type { Genre } from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url"
import useGenre from "../hooks/useGenres"
interface Props {
  onSelectGenre: (genre: Genre) => void
  selectedGenreId?: number
}

const GenreList = ({ selectedGenreId, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenre()

  if (error) return null
  if (isLoading) return < Spinner />

  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>Genre</Heading>
      <List>
        {
          data?.results.map((genre) => (
            <ListItem key={genre.id} paddingY='5px'>
              <HStack key={genre.id}>
                <Image objectFit='cover' src={getCroppedImageUrl(genre.image_background)} alt={genre.name} boxSize='32px' borderRadius={8} />
                <Button whiteSpace='normal' textAlign='left' onClick={() => onSelectGenre(genre)} variant='link' fontWeight={selectedGenreId == genre.id ? 'bold' : "normal"} color={selectedGenreId == genre.id ? 'gray.100' : 'gray.600'}>
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
      </List >
    </>
  )
}

export default GenreList