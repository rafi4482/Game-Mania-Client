import { Badge } from '@chakra-ui/react';

interface Props { 
  score: number;
  metacritic: number;
}

const CriticScore = ({ score , metacritic }: Props) => {
  let color = metacritic > 75 ? 'green' : metacritic > 60 ? 'yellow' : '';

  return (
    <>
        <Badge>{score}</Badge>
                <Badge colorScheme={color} fontSize='14px' paddingX={2} borderRadius='4px'>{metacritic}</Badge>

    </>

    
  )
}

export default CriticScore