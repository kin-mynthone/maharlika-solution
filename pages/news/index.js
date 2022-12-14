import {
  Box,
  Flex,
  InputRightElement,
  Text,
  InputGroup,
  Input,
  VStack,
  HStack,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

import { MotionButton, MotionFlex } from "../../constants/components/motion";
import { chakra } from "@chakra-ui/react";

import { startUpStore } from "../../store/start_up";
import { useState, useEffect } from "react";

import { useWindowSize } from "../../custom_hooks";

import "@fontsource/poppins";
export default function Home() {
  const setshowStartup = startUpStore((state) => state.set_show_startup);

  useEffect(() => {
    setshowStartup(false);
  });
  const { height, width } = useWindowSize();

  return (
    <MotionFlex
      initial={{ opacity: 0 }}
      animate={{ opacity: 100, delay: 1 }}
      transition={{ ease: "easeIn", duration: 10, delay: 1 }}
    >
      <Box bgColor={"white"}></Box>
    </MotionFlex>
  );
}
