import {
  MenuRoot,
  MenuTrigger,
  Button,
  Icon,
  MenuContent,
  MenuItem,
} from "@chakra-ui/react";
import React from "react";
import { BsChevronDoubleDown } from "react-icons/bs";

interface Props {
  orderBySelection: (o: string) => void;
}

function SortGames({ orderBySelection }: Props) {
  const sortingFields = [
    "released",
    "added",
    "created",
    "updated",
    "metacritic",
  ];
  return (
    <MenuRoot size={"md"}>
      <MenuTrigger asChild>
        <Button variant="outline" size="md">
          OrderBy:{" "}
          <Icon as={BsChevronDoubleDown} fontSize="2xl" color="pink.700" />
        </Button>
      </MenuTrigger>
      <MenuContent width={"md"}>
        {sortingFields.map((field) => (
          <MenuItem
            value={field}
            onClick={() => {
              orderBySelection(field);
            }}
          >
            {field.toUpperCase()}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
}

export default SortGames;
