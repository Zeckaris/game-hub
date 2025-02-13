import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";
import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <div>
      <HStack justifyContent={"space-between"} padding={"10px"}>
        <Image src={logo} boxSize={"60px"} />
        <SearchBar />
        <ColorModeButton />
      </HStack>
    </div>
  );
}

export default NavBar;
