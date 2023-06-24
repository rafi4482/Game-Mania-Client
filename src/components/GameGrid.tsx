import React, { useState, useEffect } from "react";
import useGames from "../hooks/useGames";
import { SimpleGrid, Box, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

const GameGrid = () => {
  const { games, error } = useGames();
  const [isLoading, setIsLoading] = useState(true);
  const skeletons = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    if (games.length > 0) {
      setIsLoading(false);
    }
  }, [games]);

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
          {games.map((game) => (
          <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
            
          ))}
        </SimpleGrid>
    
  );
};

export default GameGrid;
