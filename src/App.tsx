import { useState } from "react";
import { Button, Grid, GridItem, HStack } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GameGenere from "./components/GameGenere";

function App() {
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
          <GameGenere />
        </GridItem>

        <GridItem area={"main"} padding={2}>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
