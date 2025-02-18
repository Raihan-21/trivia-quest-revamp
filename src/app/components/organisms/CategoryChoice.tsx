"use client";
import { Box, Flex } from "@chakra-ui/react";
import { stayPixel } from "@/app/fonts/font";

import { AnimatePresence, motion } from "framer-motion";
import StepHeader from "@/app/components/molecules/StepHeader";

const CategoryChoice = ({
  onCategorySelection,
}: {
  onCategorySelection: () => void;
}) => {
  return (
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
                onClick={onCategorySelection}
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
                onClick={() => {}}
                data-testid="no-button"
              >
                No
              </Box>
            </motion.div>
          </motion.div>
        </Flex>
      </motion.div>
    </Flex>
  );
};

export default CategoryChoice;
