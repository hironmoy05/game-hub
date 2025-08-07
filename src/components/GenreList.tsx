import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react"
import useData from "../hooks/useData"
import type { Genre } from "../hooks/useGenre"
import getCroppedImageUrl from "../services/image-url"

const GenreList = () => {
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
                <Text fontSize='lg' fontWeight='bold' color='gray.600'>
                  {genre.name}
                </Text>
              </HStack>
            </ListItem>
          )
        })
      }
    </List >
  )
}

export default GenreList