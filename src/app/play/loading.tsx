import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { stayPixel } from "../fonts/font";

const Loading = () => {
  return (
    <Box
      minHeight={"100vh"}
      width={"100vw"}
      backgroundColor={"#44337A"}
      paddingTop={"170px"}
      paddingX={10}
    >
      <Flex
        justifyContent={"center"}
        color={"white"}
        fontSize={"2xl"}
        className={stayPixel.className}
      >
        Loading...
      </Flex>
    </Box>
  );
};

export default Loading;
