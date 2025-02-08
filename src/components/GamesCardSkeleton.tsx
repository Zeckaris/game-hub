import { Card, CardBody, HStack, Skeleton } from "@chakra-ui/react";

function GamesCardSkeleton() {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Skeleton height="200px" width="100%" />

      <Card.Body gap="2">
        <Skeleton height="20px" width="70%" />
        <HStack padding={2} overflowX="auto">
          <HStack>
            <Skeleton height="20px" width="70%" />
          </HStack>

          <Skeleton height="20px" width="40px" />
        </HStack>
      </Card.Body>

      <Card.Footer gap="2"></Card.Footer>
    </Card.Root>
  );
}

export default GamesCardSkeleton;
