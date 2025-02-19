import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Box, Text } from "@chakra-ui/react";
import { QuestionStatus } from "@/app/types/quiz";

const Choice = ({
  value,
  questionStatus,
  onClick,
}: {
  value: string;
  questionStatus: QuestionStatus;
  onClick: () => void;
}) => {
  const backgroundColor = useMemo(() => {
    if (!questionStatus.isChosen) return "white";
    if (value === questionStatus.correctAnswer) return "green.300";
    return "red.500";
  }, [questionStatus.isChosen, questionStatus.correctAnswer, value]);
  return (
    <motion.div
      whileTap={{
        scale: questionStatus.correctAnswer === value ? 0.8 : 1,
        y: questionStatus.correctAnswer !== value ? 10 : 0,
      }}
    >
      <Box
        borderRadius={10}
        paddingY={1}
        paddingX={4}
        backgroundColor={backgroundColor}
        cursor={"pointer"}
        width={"fit-content"}
        onClick={onClick}
      >
        <Text>{value}</Text>
      </Box>
    </motion.div>
  );
};

export default Choice;
