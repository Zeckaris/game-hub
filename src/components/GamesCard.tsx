import { GamesInterface } from "../hook/useGames";
import { Card, Image, HStack } from "@chakra-ui/react";
import PlatfromMapping from "./PlatfromMapping";
import MetaCriticRating from "./MetaCriticRating";
import getCropedImage from "../services/image-service";
import Emoji from "./Emoji";

function GamesCard({
  name,
  background_image,
  parent_platforms,
  metacritic,
  rating_top,
}: GamesInterface) {
  return (
    <Card.Root height="95%">
      <Image src={getCropedImage(background_image)} alt={name + " image"} />
      <Card.Body gap="1">
        <HStack padding={2} overflowX="auto" justifyContent={"space-between"}>
          <HStack>
            <PlatfromMapping parent_platforms={parent_platforms} />
          </HStack>
          <MetaCriticRating metacritic={metacritic} />
        </HStack>
        <Card.Title>{name}</Card.Title>
        <Emoji rating_top={rating_top} />
      </Card.Body>
      <Card.Footer gap="2"></Card.Footer>
    </Card.Root>
  );
}

export default GamesCard;
