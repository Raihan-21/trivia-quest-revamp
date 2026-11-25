"use client";
import { Box } from "@chakra-ui/react";
import { useCallback, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import styles from "@/app/assets/styles/Index.module.css";
import MainMenu from "@/app/components/organisms/MainMenu";
import CategoryChoice from "@/app/components/organisms/CategoryChoice";

import DifficultySelection from "@/app/components/organisms/DifficultySelection";
import dynamic from "next/dynamic";
import { Step } from "./types";

const CategorySelection = dynamic(
  () => import("@/app/components/organisms/CategorySelection"),
);
const steps: Step[] = [
  {
    value: "step-1",
  },
  {
    value: "step-2",
  },
  {
    value: "step-3",
  },
  {
    value: "step-4",
  },
];

export default function Home() {
  const [currentStep, setCurrentStep] = useState<Step>(steps[0]);

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const goToStep = useCallback(
    (name: string) => {
      const nextStep = steps.find((step) => step.value === name);
      if (nextStep) setCurrentStep(nextStep);
    },
    [steps],
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
        {currentStep.value === "step-1" && (
          <MainMenu
            onPlay={() => {
              goToStep("step-2");
            }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {currentStep.value === "step-2" && (
          <CategoryChoice
            onCategorySelection={() => {
              goToStep("step-3");
            }}
            onSkipCategory={() => goToStep("step-4")}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {currentStep.value === "step-3" && (
          <CategorySelection
            selectedTags={selectedTags}
            onCategorySelect={(category) => {
              setSelectedTags([...selectedTags, category]);
            }}
            onCategoryUnselect={(tag: string) => {
              setSelectedTags(
                selectedTags.filter((selectedTag) => selectedTag !== tag),
              );
            }}
            onContinue={() => goToStep("step-4")}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {currentStep.value === "step-4" && (
          <DifficultySelection selectedTags={selectedTags} />
        )}
      </AnimatePresence>
    </Box>
  );
}
