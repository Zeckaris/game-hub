import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hook/useGames";
import GamesCard from "./GamesCard";
import GamesCardSkeleton from "./GamesCardSkeleton";

function GameGrid() {
  const { games, setGames, error, isLoading } = useGames();
  const skeletonCount = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      {error && <Text> {error} </Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        gap={10}
        padding={"10px"}
      >
        {isLoading
          ? skeletonCount.map((i) => <GamesCardSkeleton />)
          : games.map((game) => {
              return (
                <GamesCard
                  key={game.id}
                  id={game.id}
                  name={game.name}
                  background_image={game.background_image}
                  released={game.released}
                  parent_platforms={game.parent_platforms}
                  metacritic={game.metacritic}
                />
              );
            })}
      </SimpleGrid>
    </div>
  );
}

export default GameGrid;
