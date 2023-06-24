import { Card, CardBody, Center, Heading, HStack, Image, Text, Box, Spinner, useStyleConfig } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import getCroppedImageUrl from '../services/image-url';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
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
  const cardStyles = useStyleConfig('Card', { variant: 'hover' }); // Custom variant for hover effect

  return (
    <Card
      key={game.id}
            _hover={{ transform: "scale(1.05)" }}
            transition="transform 0.2s ease-in-out"
            cursor="pointer"
    >
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody textAlign="center">
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
        <Center>
          <PlatformIconList platforms={game.parent_platforms?.map((p) => p.platform)} />
        </Center>
      </CardBody>
    </Card>
  );
};

export default GameCard;
