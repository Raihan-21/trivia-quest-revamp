"use client";

import theme from "@/app/theme";
import { ChakraProvider } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const Provider = ({ children }: { children: ReactNode }) => {
  return <ChakraProvider value={theme}>{children}</ChakraProvider>;
};

export default Provider;
