import { useState } from "react";
import { Button, Grid, GridItem, HStack } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GameGenere from "./components/GameGenere"; //this is the component
import { GenereInterface } from "./hook/useGeneres";

function App() {
  const [selectedGamesGenre, setSelectedGamesGenre] =
    useState<GenereInterface | null>(null);
  const updateSelectedGames = (genere: GenereInterface) => {
    setSelectedGamesGenre(genere);
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
            updateSelectedGames={updateSelectedGames}
            selectedGamesGenre={selectedGamesGenre}
          />
        </GridItem>

        <GridItem area={"main"} padding={2}>
          <GameGrid selectedGamesGenere={selectedGamesGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
