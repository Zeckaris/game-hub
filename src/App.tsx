import { useState } from "react";
import { Button, Grid, GridItem, HStack } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";

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
          bg={"red"}
          display={{ base: "none", lg: "block" }}
        >
          Aside
        </GridItem>

        <GridItem area={"main"} bg={"orange"}>
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
