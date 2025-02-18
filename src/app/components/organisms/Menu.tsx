"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import { stayPixel } from "@/app/fonts/font";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { AnimatePresence, motion } from "framer-motion";
import useFetch from "@/app/hooks/useFetch";
import StepHeader from "@/app/components/molecules/StepHeader";
import ContinueButton from "@/app/components/molecules/ContinueButton";

import { queryGenerator } from "@/app/helpers/helper";
import styles from "@/app/assets/styles/Index.module.css";
import CategoryChoice from "./CategorySelection";
const Menu = ({
  firstStep,
  secondStep,
  thirdStep,
}: {
  firstStep: ReactNode;
  secondStep: ReactNode;
  thirdStep: ReactNode;
}) => {
  const router = useRouter();
  const [steps, setSteps] = useState([
    {
      value: "step-1",

      active: true,
    },
    {
      value: "step-2",

      active: false,
    },
    {
      value: "step-3",

      active: false,
    },
    {
      value: "step-4",

      active: false,
    },
  ]);
  const [onClickedPlay, setOnClickedPlay] = useState(false);

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const [difficulties, setDifficulties] = useState([
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
  const [score, setScore] = useState(0);
  const [fetchCategories, categoriesData, categoriesLoading] = useFetch(
    "https://the-trivia-api.com/v2/categories"
  );
  const goToStep = useCallback(
    (name: string) => {
      setSteps(
        steps.map((step) => {
          if (step.value === name) {
            return { ...step, active: true };
          }
          return { ...step, active: false };
        })
      );
    },
    [steps]
  );
  useEffect(() => {
    setScore(Number(localStorage.getItem("high-score")));
  }, []);

  return (
    <Box
      minHeight={"100vh"}
      // width={"100vw"}
      backgroundColor="#44337A"
      paddingBottom={10}
      paddingX={10}
      position={"relative"}
      className={styles.container}
    >
      <Box
        width={"100%"}
        height={"100px"}
        position={"absolute"}
        top={10}
        left={0}
        overflowX={"hidden"}
      >
        <motion.img
          src="/img/cloud.png"
          width={100}
          height={100}
          animate={{ left: "100%" }}
          initial={{ left: 0 }}
          transition={{ repeat: Infinity, duration: 50 }}
          className={styles.cloud}
        />
      </Box>
      <AnimatePresence>
        {steps[0].active && (
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
                  onClick={() => {
                    setOnClickedPlay(true);
                    setTimeout(() => {
                      setOnClickedPlay(false);
                    }, 100);
                    setSteps(
                      steps.map((step) => {
                        if (step.value === "step-1")
                          return { ...step, active: false };
                        if (step.value === "step-2")
                          return { ...step, active: true };
                        return { ...step };
                      })
                    );
                  }}
                  data-testid="play-button"
                >
                  <Text fontSize={"2xl"}>Play now</Text>
                </Box>
              </motion.div>
            </motion.div>
          </Flex>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {steps[1].active && (
          <Flex flexDirection={"column"} alignItems={"center"} paddingTop={40}>
            <motion.div exit={{ scale: 0 }} transition={{ duration: 0.5 }}>
              <motion.div
                initial={{ scale: 0, originX: 0.5, originY: 0.5 }}
                animate={{ scale: 1, originX: 0.5, originY: 0.5 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <StepHeader text="Do you want to choose categories for your quest?" />
              </motion.div>
            </motion.div>
            <motion.div
              exit={{ scale: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Flex justifyContent={"center"} columnGap={5} marginTop={10}>
                <motion.div
                  initial={{ scale: 0, originX: 0.5, originY: 0.5 }}
                  animate={{ scale: 1, originX: 0.5, originY: 0.5 }}
                  transition={{ duration: 0.2, delay: 1.5 }}
                >
                  <motion.div whileTap={{ scale: 0.8 }}>
                    <Box
                      backgroundColor={"green.300"}
                      color={"white"}
                      paddingY={2}
                      paddingX={10}
                      borderRadius={5}
                      fontSize={"large"}
                      cursor={"pointer"}
                      className={stayPixel.className}
                      onClick={() => {
                        goToStep("step-3");
                      }}
                      data-testid="yes-button"
                    >
                      Yes
                    </Box>
                  </motion.div>
                </motion.div>
                <motion.div
                  initial={{ scale: 0, originX: 0.5, originY: 0.5 }}
                  animate={{ scale: 1, originX: 0.5, originY: 0.5 }}
                  transition={{ duration: 0.2, delay: 1.8 }}
                >
                  <motion.div whileTap={{ scale: 0.8 }}>
                    <Box
                      backgroundColor={"red.500"}
                      color={"white"}
                      paddingY={2}
                      paddingX={10}
                      borderRadius={5}
                      fontSize={"large"}
                      cursor={"pointer"}
                      className={stayPixel.className}
                      onClick={() => {
                        goToStep("step-4");
                      }}
                      data-testid="no-button"
                    >
                      No
                    </Box>
                  </motion.div>
                </motion.div>
              </Flex>
            </motion.div>
          </Flex>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {steps[2].active && (
          <CategoryChoice onContinue={() => goToStep("step-4")} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {steps[3].active && (
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
        )}
      </AnimatePresence>
      {/* <Image height={540} width={360} src={GroundImage} alt="ground" /> */}
    </Box>
  );
};

export default Menu;
