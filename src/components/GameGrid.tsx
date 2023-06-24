import React, { useState, useEffect } from "react";
import useGames from "../hooks/useGames";
import { SimpleGrid, Box } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid: React.FC = () => {
  const { games, error } = useGames();
  const [isLoading, setIsLoading] = useState(true);
  const skeletons = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    if (games.length > 0) {
      setIsLoading(false);
    }
  }, [games]);

  return (
    <>
      {error && <h2>{error}</h2>}
       
        
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          padding="10px"
          spacing={10}
        >
           {isLoading &&
        skeletons.map((skeleton) => (
          
            <GameCardSkeleton />
          
        ))}
          {games.map((game) => (
            <Box
              key={game.id}
              _hover={{ transform: "scale(1.05)" }}
              transition="transform 0.2s ease-in-out"
              cursor="pointer"
            >
              <GameCard game={game}/>
            </Box>
          ))}
        </SimpleGrid>
    </>
  );
};

export default GameGrid;
