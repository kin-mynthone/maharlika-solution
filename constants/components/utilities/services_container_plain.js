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

const ServicesContainerPlain = (props) => {
  const { height, width } = useWindowSize();
  const { data, dataIndex } = props;
  const { title, icon, subTitle, description, routeURL } = data[dataIndex];

  return (
    <Box
      width={["280px", "280px", "280px", "280px", "360px", "450px"]}
      justifyContent={"start"}
      alignItems={"start"}
    >
      <VStack alignItems={"start"} spacing={"20px"}>
        <Box w={["25%", "25%", "25%", "25%", "25%", "25%"]}>
          <Image src={icon} alt="ms" />
        </Box>
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
            <chakra.h3
              fontFamily={"Poppins.black"}
              fontSize={["18px", "20px", "20px", "20px", "16px", "16px"]}
              fontWeight="thinss"
              letterSpacing={{
                base: "normal",
                md: "normal",
              }}
              color="#16365F"
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
            >
              {subTitle}
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
        </VStack>
      </VStack>
    </Box>
  );
};

export default ServicesContainerPlain;
