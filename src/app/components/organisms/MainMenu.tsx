"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import { stayPixel } from "@/app/fonts/font";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { AnimatePresence, motion } from "framer-motion";

const MainMenu = ({ onPlay }: { onPlay: () => void }) => {
  const [score, setScore] = useState(0);
  return (
    <Flex flexDirection={"column"} alignItems={"center"}>
      {!!score && (
        <Box position={"absolute"} right={10} top={10}>
          <Text color={"yellow.300"} fontSize={30} fontWeight={"bold"}>
            Total Score: {score}
          </Text>
        </Box>
      )}
      <motion.div
        exit={{ scale: 0, originX: 0.5, originY: "50%" }}
        transition={{ duration: 0.6 }}
      >
        <Text
          fontSize={"6xl"}
          className={stayPixel.className}
          textAlign={"center"}
          color={"white"}
          paddingTop={20}
          data-testid="title"
        >
          Trivia Quest
        </Text>
      </motion.div>
      <motion.div
        exit={{ scale: 0, originX: 0.5, originY: "50%" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div whileTap={{ scale: 0.8 }}>
          <Box
            className={stayPixel.className}
            backgroundColor={"white"}
            width={"fit-content"}
            paddingY={2}
            paddingX={4}
            borderRadius={10}
            marginTop={50}
            cursor={"pointer"}
            boxShadow={"3px 3px 3px 3px black"}
            _hover={{ boxShadow: "none" }}
            onClick={onPlay}
            data-testid="play-button"
          >
            <Text fontSize={"2xl"}>Play now</Text>
          </Box>
        </motion.div>
      </motion.div>
    </Flex>
  );
};

export default MainMenu;
