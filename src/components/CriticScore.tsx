import { Badge } from '@chakra-ui/react';

interface Props { 
  score: number;
  metacritic: number;
}

const CriticScore = ({ score , metacritic }: Props) => {

  return (
    <>
        <Badge>{score}</Badge>
                <Badge>{metacritic}</Badge>

    </>

    
  )
}

export default CriticScore