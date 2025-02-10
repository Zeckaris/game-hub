import {
  Box,
  Button,
  HStack,
  Image,
  Link,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";

import useGeneres, { GenereInterface } from "../hook/useGeneres";

interface Props {
  updateSelectedGames: (genere: GenereInterface) => void;
}

function GameGenere({ updateSelectedGames }: Props) {
  const { genere, isLoading, errorGenere } = useGeneres();

  if (isLoading) {
    return <Spinner />;
  }
  if (errorGenere) {
    return null;
  }
  return (
    <Box padding="2">
      <Text fontWeight="bold" fontSize={24} margin={1}>
        Generes
      </Text>
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

              <Button
                fontWeight="semibold"
                variant="ghost"
                onClick={() => {
                  updateSelectedGames(g);
                }}
              >
                {" "}
                <Link>{g.name}</Link>{" "}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List.Root>
    </Box>
  );
}

export default GameGenere;
