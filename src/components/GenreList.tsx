import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useData from '../hooks/useData';
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}


const GenreList = ({selectedGenre,onSelectGenre }: Props) => {

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
    <>
<Heading fontSize='4xl' marginBottom={5} color='lightblue'>
  Genre
</Heading>
    <List>
        {data.map(genre => <ListItem key={genre.id} paddingY='5px'>
          <HStack cursor="pointer">
       <Image
       boxSize='32px'
       borderRadius={8}
       objectFit='cover'
      src={getCroppedImageUrl(genre.image_background)}
       />
<Button
  fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'semibold'}
  onClick={() => onSelectGenre(genre)}
  fontSize='lg'
  variant='link'
  transition="color 0.3s ease, transform 0.3s ease"
  _hover={{
    color: 'white',
    transform: 'scale(1.1)',
  }}
  _focus={{
    boxShadow: 'none',
  }}
  color={genre.id === selectedGenre?.id ? 'orange' : 'white'}
>
  {genre.name}
</Button>
              </HStack>
        </ListItem>)}
        
    </List>
     </>
  )
 
}

export default GenreList