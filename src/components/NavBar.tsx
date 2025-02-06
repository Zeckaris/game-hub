import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";

function NavBar() {
  return (
    <div>
      <HStack>
        <Image src={logo} boxSize={"60px"} />
        <ColorModeButton />
      </HStack>
    </div>
  );
}

export default NavBar;
