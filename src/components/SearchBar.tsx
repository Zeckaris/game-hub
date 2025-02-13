import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";

function SearchBar() {
  return (
    <InputGroup startElement={<BsSearch />} width={"full"}>
      <Input placeholder="Search Games..." borderRadius={20} variant="subtle" />
    </InputGroup>
  );
}

export default SearchBar;
