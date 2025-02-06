import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Box, Text } from "@chakra-ui/react";

interface GamesInterface {
  id: number;
  name: string;
}
interface FetchedGames {
  count: number;
  results: GamesInterface[];
}

function GameGrid() {
  const [games, setGames] = useState<GamesInterface[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchedGames>("games")
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

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
