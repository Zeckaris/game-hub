import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function GamesCardContainer({ children }: Props) {
  return (
    <Box maxW="sm" overflow="hidden" borderRadius={10} height={420} width={350}>
      {children}
    </Box>
  );
}

export default GamesCardContainer;
