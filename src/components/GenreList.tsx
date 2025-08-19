import { Button, Heading, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react"
import useGenre from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url"
import useGameQueryStore from "../store"

const GenreList = () => {
  const { data, error, isLoading } = useGenre()
  const genreId = useGameQueryStore(s => s.gameQuery.genreId)
  const setGenreId = useGameQueryStore(s => s.setGenreId)

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
                <Button whiteSpace='normal' textAlign='left' onClick={() => setGenreId(genre.id)} variant='link' fontWeight={genreId == genre.id ? 'bold' : "normal"} color={genreId == genre.id ? 'gray.100' : 'gray.600'}>
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