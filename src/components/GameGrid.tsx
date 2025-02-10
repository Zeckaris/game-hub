import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hook/useGames";
import GamesCard from "./GamesCard";
import GamesCardSkeleton from "./GamesCardSkeleton";
import GamesCardContainer from "./GamesCardContainer";
import { GenereInterface } from "../hook/useGeneres";

interface Props {
  selectedGamesGenere: GenereInterface | null;
}

function GameGrid({ selectedGamesGenere }: Props) {
  const { games, setGames, error, isLoading } = useGames(selectedGamesGenere);
  const skeletonCount = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      {error && <Text> {error} </Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={10} padding={"10px"}>
        {isLoading
          ? skeletonCount.map((i) => (
              <GamesCardContainer>
                {" "}
                <GamesCardSkeleton />
              </GamesCardContainer>
            ))
          : games.map((game) => {
              return (
                <GamesCardContainer>
                  <GamesCard
                    key={game.id}
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
