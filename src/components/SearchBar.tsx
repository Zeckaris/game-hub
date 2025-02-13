import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

interface Props {
  searchGame: (s: string) => void;
}

function SearchBar({ searchGame }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          searchGame(ref.current.value);
        }
      }}
    >
      <InputGroup startElement={<BsSearch />} width={"full"}>
        <Input
          placeholder="Search Games..."
          borderRadius={20}
          variant="subtle"
          name="searchText"
          ref={ref}
        />
      </InputGroup>
    </form>
  );
}

export default SearchBar;
