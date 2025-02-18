import { Box, Collapsible, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";

import { motion } from "framer-motion";
import { GoChevronRight } from "react-icons/go";

const CategoryDropdown = ({
  group,
  groupName,
  onCategoryClick,
}: {
  group: any;
  groupName: string;
  onCategoryClick: (category: string) => void;
}) => {
  const { open, onToggle } = useDisclosure();
  return (
    <Box
      borderRadius={10}
      paddingY={1}
      paddingX={4}
      backgroundColor={"white"}
      cursor={"pointer"}
      height={"fit-content"}
      data-testid="category-container"
    >
      <Collapsible.Root>
        <Collapsible.Trigger>
          <Flex
            onClick={onToggle}
            borderBottom={5}
            borderColor={"black"}
            justifyContent={"space-between"}
            alignItems={"center"}
            columnGap={1}
          >
            {groupName}
            <motion.div animate={{ rotateZ: open ? 90 : 0 }}>
              <GoChevronRight />
            </motion.div>
          </Flex>
        </Collapsible.Trigger>
        <Collapsible.Content>
          {group[groupName].map((category: string, i: number) => (
            <Box
              key={i}
              onClick={() => {
                onCategoryClick(category);
              }}
              textTransform={"capitalize"}
              data-testid="sub-category"
            >
              {category.replaceAll("_", " ")}
            </Box>
          ))}
        </Collapsible.Content>
      </Collapsible.Root>
    </Box>
  );
};

export default CategoryDropdown;
