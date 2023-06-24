import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useData from '../hooks/useData';
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url';

const GenreList = () => {

   const { data, isLoading, error } = useGenres();

if(error) return null;

   if (isLoading) return <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='green.500'
  size='xl'
/>

  return (
    <List>
        {data.map(genre => <ListItem key={genre.id} paddingY='5px'>
          <HStack cursor="pointer">
       <Image
       boxSize='32px'
       borderRadius={8}
      src={getCroppedImageUrl(genre.image_background)}
       />
       <Text fontSize='lg'>{genre.name}</Text>
              </HStack>
        </ListItem>)}
        
    </List>
  )
}

export default GenreList