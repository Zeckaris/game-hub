import React from "react";
import { GamesInterface } from "../hook/useGames";
import { Card, Image, Text, Button } from "@chakra-ui/react";

function GamesCard({ id, name, background_image, released }: GamesInterface) {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image src={background_image} alt={name + " image"} />
      <Card.Body gap="2">
        <Card.Title>{name}</Card.Title>
        <Card.Description>{released}</Card.Description>
      </Card.Body>
      <Card.Footer gap="2"></Card.Footer>
    </Card.Root>
  );
}

export default GamesCard;
