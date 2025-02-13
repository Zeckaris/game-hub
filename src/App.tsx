import { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GameGenere from "./components/GameGenere";
import { GenereInterface } from "./hook/useGeneres";
import { PlatformInterface } from "./hook/usePlatform";

export interface GameQuery {
  generes: GenereInterface | null;
  platforms: PlatformInterface | null;
  ordering: string;
  search: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const [gamesHeading, setGamesHeading] = useState("");

  const updateSelectedGamesGenere = (generes: GenereInterface) => {
    setGamesHeading(generes.name);
    setGameQuery({ ...gameQuery, generes });
  };
  const updateSelectedGamesPlatform = (platforms: PlatformInterface) => {
    setGamesHeading(platforms.name);
    setGameQuery({ ...gameQuery, platforms });
  };
  const orderBySelection = (ordering: string) => {
    setGameQuery({ ...gameQuery, ordering });
  };
  const searchGame = (s: string) => {
    setGamesHeading(s);
    setGameQuery({ ...gameQuery, search: s });
  };
  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      >
        <GridItem area={"nav"}>
          <NavBar searchGame={searchGame} />
        </GridItem>

        <GridItem
          area={"aside"}
          display={{ base: "none", lg: "block" }}
          width={230}
        >
          <GameGenere
            updateSelectedGamesGenere={updateSelectedGamesGenere}
            gameQuery={gameQuery}
          />
        </GridItem>

        <GridItem area={"main"} padding={2}>
          <GameGrid
            gameQuery={gameQuery}
            updateSelectedGamesPlatform={updateSelectedGamesPlatform}
            orderBySelection={orderBySelection}
            gamesHeading={gamesHeading}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
