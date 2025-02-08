import React from "react";

import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hook/useGames";
import GamesCard from "./GamesCard";

function GameGrid() {
  const { games, setGames, error } = useGames();

  return (
    <div>
      {error && <Text> {error} </Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        gap={10}
        padding={"10px"}
      >
        {games.map((game) => {
          return (
            <GamesCard
              key={game.id}
              id={game.id}
              name={game.name}
              background_image={game.background_image}
              released={game.released}
              parent_platforms={game.parent_platforms}
            />
          );
        })}
      </SimpleGrid>
    </div>
  );
}

export default GameGrid;
