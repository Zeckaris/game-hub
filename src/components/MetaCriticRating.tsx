import { Badge } from "@chakra-ui/react";

interface Props {
  metacritic: number;
}

function MetaCriticRating({ metacritic }: Props) {
  const colorDefinitions = (rating: number) => {
    if (rating >= 90) {
      return "green";
    } else if (rating >= 75) {
      return "yellow";
    } else if (rating >= 50) {
      return "orange";
    } else {
      return "red";
    }
  };
  return (
    <>
      <Badge colorPalette={colorDefinitions(metacritic)}>{metacritic}</Badge>
    </>
  );
}

export default MetaCriticRating;
