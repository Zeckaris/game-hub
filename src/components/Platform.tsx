import { Box, NativeSelectRoot, NativeSelectField } from "@chakra-ui/react";

import usePlatform from "../hook/usePlatform";

interface Props {
  updateSelectedPlatform: (p: number) => void;
}

function Platform({ updateSelectedPlatform }: Props) {
  const { platforms, setPlatforms, error, isLoading } = usePlatform();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateSelectedPlatform(parseInt(e.target.value));
  };

  return (
    <Box padding="1">
      {error && <span>{error}</span>}
      <NativeSelectRoot size="sm" width="300px">
        <NativeSelectField
          placeholder="Platforms"
          onChange={(e) => {
            handleChange(e);
          }}
        >
          {platforms.map((p) => (
            <option value={p.id.toString()} key={p.id}>
              {p.name}
            </option>
          ))}
        </NativeSelectField>
      </NativeSelectRoot>
    </Box>
  );
}

export default Platform;
