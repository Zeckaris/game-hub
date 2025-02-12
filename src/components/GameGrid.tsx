import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hook/useGames";
import GamesCard from "./GamesCard";
import GamesCardSkeleton from "./GamesCardSkeleton";
import GamesCardContainer from "./GamesCardContainer";
import Platform from "./Platform";
import { PlatformInterface } from "../hook/usePlatform";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
  updateSelectedGamesPlatform: (p: PlatformInterface) => void;
}

function GameGrid({ gameQuery, updateSelectedGamesPlatform }: Props) {
  const { games, error, isLoading } = useGames(gameQuery);
  const skeletonCount = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      {error && <Text> {error} </Text>}
      <Box>
        <Platform updateSelectedGamesPlatform={updateSelectedGamesPlatform} />{" "}
      </Box>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={10} padding={"10px"}>
        {isLoading
          ? skeletonCount.map((i) => (
              <GamesCardContainer key={i}>
                {" "}
                <GamesCardSkeleton />
              </GamesCardContainer>
            ))
          : games.map((game) => {
              return (
                <GamesCardContainer key={game.id}>
                  <GamesCard
                    id={game.id}
                    name={game.name}
                    background_image={game.background_image}
                    released={game.released}
                    parent_platforms={game.parent_platforms}
                    metacritic={game.metacritic}
                  />
                </GamesCardContainer>
              );
            })}
      </SimpleGrid>
    </div>
  );
}

export default GameGrid;
