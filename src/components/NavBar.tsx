import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";

function NavBar() {
  return (
    <div>
      <HStack>
        <Image src={logo} boxSize={"60px"} />
      </HStack>
    </div>
  );
}

export default NavBar;
