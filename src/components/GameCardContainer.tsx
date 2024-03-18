import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box 
      borderRadius={10} 
      overflow="hidden" 
      cursor="pointer" 
      _hover={{ transform: "scale(1.03)", borderRadius: 10, overflow: "hidden" }} 
      transition="transform 0.2s">
      {children}
    </Box>
  );
};

export default GameCardContainer;
