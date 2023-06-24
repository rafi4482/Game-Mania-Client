import { Card, CardBody,Center, Heading, HStack, Image, Text } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList'
// import getCroppedImageUrl from '../services/image-url'
// import CriticScore from './CriticScore'
//import Emoji from './Emoji'
// import PlatformIconList from './PlatformIconList'

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
   <Card
      borderRadius={10}
      overflow="hidden"
      boxShadow="md"
      transition="box-shadow 0.2s ease-in-out"
      _hover={{ boxShadow: "lg" }}
    >
      <Image src={game.background_image} h="200px" objectFit="cover" />
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
          <PlatformIconList platforms={game.parent_platforms?.map(p => p.platform)} />
        </Center>  </CardBody>
    </Card>
  )
}

export default GameCard