import { Button, Heading, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react"
import type { Genre } from "../hooks/useGenre"
import getCroppedImageUrl from "../services/image-url"
import useGenre from "../hooks/useGenre"
interface Props {
  onSelectGenre: (genre: Genre) => void
  selectedGenre: Genre | null
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data: genres, error, isLoading } = useGenre()

  if (error) return null
  if (isLoading) return < Spinner />

  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>Genre</Heading>
      <List>
        {
          genres.map((genre) => (
            <ListItem key={genre.id} paddingY='5px'>
              <HStack key={genre.id}>
                <Image objectFit='cover' src={getCroppedImageUrl(genre.image_background)} alt={genre.name} boxSize='32px' borderRadius={8} />
                <Button whiteSpace='normal' textAlign='left' onClick={() => onSelectGenre(genre)} variant='link' fontWeight={selectedGenre?.id == genre.id ? 'bold' : "normal"} color={selectedGenre?.id == genre.id ? 'gray.100' : 'gray.600'}>
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