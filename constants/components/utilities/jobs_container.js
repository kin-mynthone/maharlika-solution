import {
  Heading,
  HStack,
  Text,
  VStack,
  Flex,
  Box,
  Image,
} from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";

import Router from "next/router";
import { BiChevronRight } from "react-icons/bi";

import { MotionFlex, MotionButton } from "../motion";

import { useWindowSize } from "../../../custom_hooks";

const JobsContainer = (props) => {
  const { height, width } = useWindowSize();
  const { data, dataIndex } = props;
  const { title, icon, subTitle, description, routeURL } = data[dataIndex];

  return (
    <Box
      width={["280px", "280px", "280px", "280px", "360px", "450px"]}
      justifyContent={"start"}
      alignItems={"start"}
      borderRadius={"20px"}
    >
      <VStack alignItems={"start"} spacing={"20px"}>
        <VStack alignItems={"start"} spacing={"15px"}>
          <VStack alignItems={"start"} spacing={"-5px"}>
            <chakra.h3
              fontFamily={"Poppins.black"}
              fontSize={["30px", "30px", "30px", "30px", "22px", "22px"]}
              fontWeight="black"
              letterSpacing={{
                base: "normal",
                md: "normal",
              }}
              color="#D74848"
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
            >
              {title}
            </chakra.h3>
          </VStack>
          <chakra.p
            fontSize={["14px", "14px", "15px", "15px", "12px", "12px"]}
            color="#16365F"
            whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
            fontFamily={"Poppins"}
          >
            {description}
          </chakra.p>

          <Flex w={"full"} justifyContent={"end"}>
            <MotionButton
              size={"xxs"}
              backgroundColor={"transparent"}
              _focus={{ border: "none" }}
              _focusWithin={{ backgroundColor: "transparent" }}
              _hover={{
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
              whileTap={{
                scale: 1,
              }}
              whileHover={{
                scale: 1.1,
              }}
              flexDirection={"row"}
              onClick={() => {
                Router.push({
                  pathname: routeURL,
                });
              }}
            >
              <Text fontSize="14px" fontWeight={"thin"} color={"#D74848"}>
                See More
              </Text>
              <BiChevronRight size={"20px"} color={"#D74848"} />
            </MotionButton>
          </Flex>
        </VStack>
      </VStack>
    </Box>
  );
};

export default JobsContainer;
