import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { stayPixel } from "@/app/fonts/font";

import { motion } from "framer-motion";
import StepHeader from "../molecules/StepHeader";
import CategoryDropdown from "./CategoryDropdown";
import useFetch from "@/app/hooks/useFetch";
import { RxCross2 } from "react-icons/rx";
import ContinueButton from "../molecules/ContinueButton";

const CategoryChoice = async  ({ onContinue }: { onContinue: () => void }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const [fetchCategories, categoriesData, categoriesLoading] = useFetch(
    "https://the-trivia-api.com/v2/categories"
  );

  await fetchCategories();
  // useEffect(() => {
  //   fetchCategories();
  //   // if (categoriesData) setTags(categoriesData.slice(0, 19));
  // }, []);

  return (
    <Flex flexDirection={"column"} alignItems={"center"} paddingTop={40}>
      <motion.div
        initial={{ scale: 0, originX: 0.5, originY: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <StepHeader text="Select categories :" />
        <Flex
          columnGap={5}
          rowGap={3}
          marginBottom={5}
          maxWidth={"500px"}
          flexWrap={"wrap"}
        >
          {!!selectedTags.length &&
            selectedTags.map((tag: string, i) => (
              <Flex
                borderRadius={10}
                paddingY={1}
                paddingX={4}
                backgroundColor={"green.300"}
                cursor={"pointer"}
                justifyContent={"center"}
                alignItems={"center"}
                columnGap={2}
                className={stayPixel.className}
                onClick={() => {
                  setSelectedTags(
                    selectedTags.filter((selectedTag) => selectedTag !== tag)
                  );
                }}
                key={i}
              >
                {tag.replaceAll("_", " ")} <RxCross2 />
              </Flex>
            ))}
        </Flex>
        <Flex flexWrap={"wrap"} maxWidth={"500px"} columnGap={5} rowGap={3}>
          {!categoriesLoading &&
            categoriesData &&
            Object.keys(categoriesData).map((tag: string, i: number) => (
              <CategoryDropdown
                group={categoriesData}
                groupName={tag}
                onCategoryClick={(category) => {
                  setSelectedTags([...selectedTags, category]);
                }}
                key={i}
              />
            ))}
        </Flex>
        {!!selectedTags.length && <ContinueButton onClick={onContinue} />}
      </motion.div>
    </Flex>
  );
};

export default CategoryChoice;
