import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hook/useGames";
import GamesCard from "./GamesCard";
import GamesCardSkeleton from "./GamesCardSkeleton";
import GamesCardContainer from "./GamesCardContainer";
import Platform from "./Platform";
import { PlatformInterface } from "../hook/usePlatform";
import { GameQuery } from "../App";
import SortGames from "./SortGames";

interface Props {
  gameQuery: GameQuery;
  updateSelectedGamesPlatform: (p: PlatformInterface) => void;
  orderBySelection: (o: string) => void;
  gamesHeading: string;
}

function GameGrid({
  gameQuery,
  updateSelectedGamesPlatform,
  orderBySelection,
  gamesHeading,
}: Props) {
  const { games, error, isLoading } = useGames(gameQuery);
  const skeletonCount = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (error) {
    return <Text> {error} </Text>;
  } else {
    return (
      <div>
        <Box textAlign={"center"}>
          <Heading size="4xl">{gamesHeading} Games</Heading>{" "}
        </Box>

        <Box mt={2}>
          <Platform updateSelectedGamesPlatform={updateSelectedGamesPlatform} />{" "}
          <SortGames orderBySelection={orderBySelection} />
        </Box>
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3 }}
          gap={{ base: 4, md: 6, lg: 10 }}
          p={4}
        >
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
                      rating_top={game.rating_top}
                    />
                  </GamesCardContainer>
                );
              })}
        </SimpleGrid>
      </div>
    );
  }
}

export default GameGrid;
