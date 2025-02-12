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
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const updateSelectedGamesGenere = (generes: GenereInterface) => {
    setGameQuery({ ...gameQuery, generes });
  };
  const updateSelectedGamesPlatform = (platforms: PlatformInterface) => {
    setGameQuery({ ...gameQuery, platforms });
  };
  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>

        <GridItem
          area={"aside"}
          display={{ base: "none", lg: "block" }}
          width={250}
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
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
