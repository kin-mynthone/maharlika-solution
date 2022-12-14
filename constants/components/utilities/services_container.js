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

import { BiChevronRight } from "react-icons/bi";

import { MotionFlex, MotionButton } from "../motion";

import { useRouter } from "next/router";
import { useWindowSize } from "../../../custom_hooks";

const ServicesContainer = (props) => {
  const { height, width } = useWindowSize();
  const router = useRouter();
  const { data, dataIndex } = props;
  const { title, icon, subTitle, description } = data[dataIndex];

  return (
    <Box
      width={["280px", "280px", "280px", "280px", "360px", "450px"]}
      justifyContent={"start"}
      alignItems={"start"}
      px={"30px"}
      py={"30px"}
      backgroundColor={"#16365F"}
      borderRadius={"20px"}
      style={{
        boxShadow: `0px 0px 30px rgba(0, 0, 0, 0.05) `,
      }}
    >
      <VStack alignItems={"start"} spacing={"20px"}>
        <Box w={["25%", "25%", "25%", "25%", "25%", "25%"]}>
          <Image src={icon} alt="ms" />
        </Box>
        <VStack alignItems={"start"} spacing={"15px"}>
          <VStack alignItems={"start"} spacing={"-5px"}>
            <chakra.h3
              fontFamily={"Poppins.black"}
              fontSize={["30px", "30px", "30px", "30px", "30px", "30px"]}
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
              fontSize={["18px", "20px", "20px", "20px", "18px", "18px"]}
              fontWeight="thinss"
              letterSpacing={{
                base: "normal",
                md: "normal",
              }}
              color="#FFFFFF"
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
            >
              {subTitle}
            </chakra.h3>
          </VStack>
          <chakra.p
            fontSize={["14px", "14px", "15px", "15px", "12px", "12px"]}
            color="white"
            whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
            fontFamily={"Poppins"}
          >
            {description}
          </chakra.p>

          <Flex w={"full"} justifyContent={"end"}>
            <MotionButton
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
              onClick={null} //update this
            >
              <Text fontSize="14px" fontWeight={"thin"} color={"white"}>
                See More
              </Text>
              <BiChevronRight size={"20px"} color={"white"} />
            </MotionButton>
          </Flex>
        </VStack>
      </VStack>
    </Box>
  );
};

export default ServicesContainer;
