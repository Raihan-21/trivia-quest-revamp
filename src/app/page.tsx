"use client";
import { Box } from "@chakra-ui/react";
import { useCallback, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import styles from "@/app/assets/styles/Index.module.css";
import MainMenu from "@/app/components/organisms/MainMenu";
import CategoryChoice from "@/app/components/organisms/CategoryChoice";
import CategorySelection from "@/app/components/organisms/CategorySelection";
import DifficultySelection from "@/app/components/organisms/DifficultySelection";
export default function Home() {
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

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

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
          <MainMenu
            onPlay={() => {
              setSteps(
                steps.map((step) => {
                  if (step.value === "step-1")
                    return { ...step, active: false };
                  if (step.value === "step-2") return { ...step, active: true };
                  return { ...step };
                })
              );
            }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {steps[1].active && (
          <CategoryChoice
            onCategorySelection={() => {
              goToStep("step-3");
            }}
            onSkipCategory={() => goToStep("step-4")}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {steps[2].active && (
          <CategorySelection
            selectedTags={selectedTags}
            onCategorySelect={(category) => {
              setSelectedTags([...selectedTags, category]);
            }}
            onCategoryUnselect={(tag: string) => {
              setSelectedTags(
                selectedTags.filter((selectedTag) => selectedTag !== tag)
              );
            }}
            onContinue={() => goToStep("step-4")}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {steps[3].active && <DifficultySelection selectedTags={selectedTags} />}
      </AnimatePresence>
    </Box>
  );
}
