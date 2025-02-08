import React from "react";
import { GamesInterface } from "../hook/useGames";
import { Card, Image, Text, Button } from "@chakra-ui/react";
import PlatfromMapping from "./PlatfromMapping";

function GamesCard({
  id,
  name,
  background_image,
  released,
  parent_platforms,
}: GamesInterface) {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image src={background_image} alt={name + " image"} />
      <Card.Body gap="2">
        <Card.Title>{name}</Card.Title>
        <PlatfromMapping parent_platforms={parent_platforms} />
      </Card.Body>
      <Card.Footer gap="2"></Card.Footer>
    </Card.Root>
  );
}

export default GamesCard;
