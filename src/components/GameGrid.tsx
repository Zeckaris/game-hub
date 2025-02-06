import React, { useEffect, useState } from "react";

import { Box, Text } from "@chakra-ui/react";
import useGames from "../hook/useGames";

function GameGrid() {
  const { games, setGames, error } = useGames();

  return (
    <div>
      {error && <Text> {error} </Text>}
      <Box as="ul" listStyleType="circle">
        {games.map((game) => {
          return <li key={game.id}> {game.name}</li>;
        })}
      </Box>
    </div>
  );
}

export default GameGrid;
