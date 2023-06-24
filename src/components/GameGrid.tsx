import React from "react";
import useGames from "../hooks/useGames";
import { SimpleGrid, Box } from "@chakra-ui/react";
import GameCard from "./GameCard";

const GameGrid: React.FC = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <h2>{error}</h2>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={10}
      >
        {games.map((game) => (
          <Box
            key={game.id}
            _hover={{ transform: "scale(1.05)" }}
            transition="transform 0.2s ease-in-out"
            cursor="pointer"
            
          >
            <GameCard game={game} />
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
