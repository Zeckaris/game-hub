import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function GamesCardContainer({ children }: Props) {
  return (
    <Box
      maxW="320px"
      minW="300px"
      overflow="hidden"
      borderRadius={10}
      height={420}
      mr={4}
    >
      {children}
    </Box>
  );
}

export default GamesCardContainer;
