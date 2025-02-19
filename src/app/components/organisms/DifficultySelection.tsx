"use client";
import { Flex, Text } from "@chakra-ui/react";
import { stayPixel } from "@/app/fonts/font";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";
import StepHeader from "@/app/components/molecules/StepHeader";
import ContinueButton from "@/app/components/molecules/ContinueButton";

import { queryGenerator } from "@/app/helpers/helper";
const DifficultySelection = ({ selectedTags }: { selectedTags: string[] }) => {
  const router = useRouter();
  const [difficulties] = useState([
    {
      label: "Easy",
      value: "easy",
    },
    {
      label: "Medium",
      value: "medium",
    },
    {
      label: "Hard",
      value: "hard",
    },
  ]);

  const [selectedDifficulty, setselectedDifficulty] = useState("");

  return (
    <Flex flexDirection={"column"} alignItems={"center"} paddingTop={40}>
      <motion.div
        initial={{ scale: 0, originX: 0.5, originY: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <StepHeader text="Select Difficulty :" />
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          rowGap={3}
          marginTop={5}
          marginBottom={5}
        >
          {difficulties.map((difficulty, i) => (
            <motion.div whileTap={{ scale: 0.8 }} key={i}>
              <Text
                backgroundColor={
                  selectedDifficulty === difficulty.value
                    ? "green.300"
                    : "white"
                }
                paddingY={3}
                paddingX={10}
                width={"fit-content"}
                borderRadius={5}
                cursor={"pointer"}
                className={stayPixel.className}
                fontSize={20}
                onClick={() => {
                  setselectedDifficulty(difficulty.value);
                }}
              >
                {difficulty.label}
              </Text>
            </motion.div>
          ))}
        </Flex>

        <ContinueButton
          onClick={() => {
            const params = {
              categories: selectedTags,
              difficulties: selectedDifficulty,
            };
            const queryString = queryGenerator(params);
            router.push(`/play` + queryString);
          }}
        />
      </motion.div>
    </Flex>
  );
};

export default DifficultySelection;
