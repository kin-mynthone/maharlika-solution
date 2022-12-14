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

const CharacteristicContainer = (props) => {
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
        <Box w={["15%", "15%", "15%", "15%", "13%", "10%"]}>
          <Image src={icon} alt="ms" />
        </Box>
        <VStack alignItems={"start"} spacing={"15px"}>
          <VStack alignItems={"start"} spacing={"-5px"}>
            <chakra.h3
              fontFamily={"Poppins.black"}
              fontSize={["20px", "30px", "30px", "30px", "25px", "25px"]}
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
            fontSize={["12px", "14px", "15px", "15px", "12px", "12px"]}
            color="white"
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

export default CharacteristicContainer;
