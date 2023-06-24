import { Card, CardBody,Center, Heading, HStack, Image, Text,Box, Spinner  } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url';
// import getCroppedImageUrl from '../services/image-url'
// import CriticScore from './CriticScore'
//import Emoji from './Emoji'
// import PlatformIconList from './PlatformIconList'

interface Props {
  game: Game ;

}

const GameCard = ({ game  }: Props) => {
      const renderRatingStars = (rating: number) => {
    const roundedRating = Math.round(rating);
    const filledStars = '★'.repeat(roundedRating);
    const emptyStars = '☆'.repeat(5 - roundedRating);
    return filledStars + emptyStars;
  };

  const getMetacriticColor = (metacritic: number) => {
    if (metacritic > 75) {
      return 'green';
    } else if (metacritic > 60) {
      return 'yellow';
    } else {
      return '';
    }
  };

  const metacriticColor = getMetacriticColor(game.metacritic);

 
  return (
   <Card
      borderRadius={10}
      overflow="hidden"
      boxShadow="md"
      transition="box-shadow 0.2s ease-in-out"
      _hover={{ boxShadow: "lg" }}
    >
<Image src={getCroppedImageUrl(game.background_image)} />      <CardBody textAlign="center">
        <Heading
          fontSize="1xl"
          fontWeight="bold"
          letterSpacing="wide"
          textTransform="uppercase"
          fontFamily="sans-serif"
          color="white"
          textShadow="0px 2px 4px rgba(0, 0, 0, 0.5)"
        >
          {game.name}
        </Heading>
                <Center>
          <Text color="gray.500" fontSize="lg" mt={2}>
            <span style={{ color: 'yellow' }}>{renderRatingStars(game.rating)}</span>
          </Text>
        </Center>
        {/* <HStack
          position="absolute"
          bottom="5px"
          left="5px"
          color={metacriticColor} // Apply the color scheme dynamically
                    backgroundColor={metacriticColor === 'green' ? 'green.500' : metacriticColor === 'yellow' ? 'yellow.500' : ''}

          fontSize='14px' 
          paddingX={2} 
          borderRadius='4px'
        >
          {game.metacritic} 
        </HStack> */}
      
   <Center>
          <PlatformIconList platforms={game.parent_platforms?.map(p => p.platform)} />
        </Center>  </CardBody>
    </Card>
  )
}

export default GameCard