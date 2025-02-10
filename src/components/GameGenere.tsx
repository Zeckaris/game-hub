import {
  Box,
  HStack,
  Image,
  List,
  ListItem,
  StackSeparator,
  Text,
  VStack,
} from "@chakra-ui/react";

import useGeneres from "../hook/useGeneres";

function GameGenere() {
  const { genere, setGenere, errorGenere } = useGeneres();
  return (
    <Box padding="6">
      {errorGenere && <span>{errorGenere}</span>}
      <List.Root gap={3} height={"100vh"} listStyleType="none">
        {genere.map((g) => (
          <ListItem key={g.id}>
            <HStack height={35} border={3}>
              <Image
                src={g.image_background}
                boxSize={"40px"}
                borderRadius={3}
                mr="2"
              />

              <Text fontWeight="semibold">{g.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List.Root>
    </Box>
  );
}

export default GameGenere;
