import {
  MenuRoot,
  Button,
  MenuContent,
  MenuItem,
  MenuTrigger,
  Icon,
} from "@chakra-ui/react";

import usePlatform, { PlatformInterface } from "../hook/usePlatform";
import { BsChevronDoubleDown } from "react-icons/bs";

interface Props {
  updateSelectedGamesPlatform: (p: PlatformInterface) => void;
}

function Platform({ updateSelectedGamesPlatform }: Props) {
  const { platforms, error } = usePlatform();
  if (error !== "") {
    return null;
  }

  return (
    <MenuRoot size={"md"}>
      <MenuTrigger asChild>
        <Button variant="outline" size="md">
          Platforms{" "}
          <Icon as={BsChevronDoubleDown} fontSize="2xl" color="pink.700" />
        </Button>
      </MenuTrigger>
      <MenuContent width={"md"}>
        {platforms.map((p) => (
          <MenuItem
            key={p.id}
            value={p.name}
            onClick={() => {
              updateSelectedGamesPlatform(p);
            }}
          >
            {p.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
}

export default Platform;
