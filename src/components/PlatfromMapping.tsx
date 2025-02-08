import React from "react";
import { ParentPlatform } from "../hook/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaWindows,
  FaApple,
  FaXbox,
  FaLinux,
  FaAndroid,
  FaPlaystation,
  FaLaptop,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  parent_platforms: { platform: ParentPlatform }[];
}

function PlatfromMapping({ parent_platforms }: Props) {
  const platformIcons: { [key: string]: IconType } = {
    PC: FaLaptop,
    iOS: FaApple,
    "Apple Macintosh": MdPhoneIphone,
    PlayStation: FaPlaystation,
    Xbox: FaXbox,
    Linux: FaLinux,
    Nintendo: SiNintendo,
    Android: FaAndroid,
  };

  return (
    <>
      {parent_platforms.map((p) => {
        return (
          <HStack padding={1}>
            {p.platform.name in platformIcons ? (
              <Icon
                key={p.platform.id}
                as={platformIcons[p.platform.name]}
                color="gray.500"
              />
            ) : (
              <span>{p.platform.name}</span>
            )}
          </HStack>
        );
      })}
    </>
  );
}

export default PlatfromMapping;
