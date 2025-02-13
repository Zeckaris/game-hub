import { GamesInterface } from "../hook/useGames";
import { Card, Image, HStack } from "@chakra-ui/react";
import PlatfromMapping from "./PlatfromMapping";
import MetaCriticRating from "./MetaCriticRating";
import getCropedImage from "../services/image-service";

function GamesCard({
  name,
  background_image,
  parent_platforms,
  metacritic,
}: GamesInterface) {
  return (
    <Card.Root height="95%">
      <Image src={getCropedImage(background_image)} alt={name + " image"} />
      <Card.Body gap="1">
        <Card.Title>{name}</Card.Title>
        <HStack padding={2} overflowX="auto">
          <PlatfromMapping parent_platforms={parent_platforms} />
          <MetaCriticRating metacritic={metacritic} />
        </HStack>
      </Card.Body>
      <Card.Footer gap="2"></Card.Footer>
    </Card.Root>
  );
}

export default GamesCard;
