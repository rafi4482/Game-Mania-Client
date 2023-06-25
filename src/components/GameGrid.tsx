import React, { useState, useEffect } from "react";
import useGames, { Platform } from "../hooks/useGames";
import { SimpleGrid, Box, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";



interface Props{
  selectedGenre : Genre  | null;
  selectedPlatform : Platform | null;
}


const GameGrid = ({selectedGenre,selectedPlatform}:Props) => {
  const { data, error } = useGames(selectedGenre,selectedPlatform);
  const [isLoading, setIsLoading] = useState(true);
  const skeletons = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    if (data.length > 0) {
      setIsLoading(false);
    }
  }, [data]);

  if (error) return <Text>{error}</Text>;

  return (
  
        
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          padding="10px"
          spacing={6}
        >
           {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
          {data.map((game) => (
          <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
            
          ))}
        </SimpleGrid>
    
  );
};

export default GameGrid;
