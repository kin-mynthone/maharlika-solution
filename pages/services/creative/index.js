import {
  Box,
  Flex,
  Image,
  Text,
  InputGroup,
  Input,
  VStack,
  HStack,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";

import { MotionButton, MotionFlex } from "../../../constants/components/motion";
import { chakra } from "@chakra-ui/react";

import { startUpStore } from "../../../store/start_up";
import { useState, useEffect } from "react";

import { useWindowSize } from "../../../custom_hooks";

import {
  ServicesContainerPlain,
  ServicesContainer,
} from "../../../constants/components/utilities";

import "@fontsource/poppins";
export default function Home() {
  const setshowStartup = startUpStore((state) => state.set_show_startup);

  useEffect(() => {
    setshowStartup(false);
  });
  const { height, width } = useWindowSize();

  function CallToAction() {
    return (
      <Flex
        flexDir={["row", "row", "row", "row", "row", "row"]}
        w={width}
        alignItems={["end", "end", "end", "end", "end", "end"]}
        pt={["8em", "8em", "8em", "8em", "10em", "10em"]}
        pb={["8em", "8em", "8em", "8em", "6em", "10em"]}
        px={["7%", "7%", "7%", "7%", "10%", "10%"]}
      >
        <Box
          borderRadius={"1.5em"}
          height={["300px", "450px", "450px", "450px", "300px", "400px"]}
          w={"full"}
          style={{
            overflow: "hidden",
          }}
          filter={"auto"}
          brightness={"30%"}
        >
          <Image
            src={
              "https://images.unsplash.com/photo-1506729623306-b5a934d88b53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            }
            alt="ms"
            objectFit={"cover"}
            boxSize={"full"}
          />
        </Box>
        <VStack
          alignItems={"start"}
          spacing={"5px"}
          position={"absolute"}
          mb={["30px", "60px", "60px", "60px", "40px", "60px"]}
          ml={["20px", "50px", "50px", "50px", "50px", "50px"]}
        >
          <Box w={["13%", "25%", "25%", "25%", "8%", "10%"]}>
            <Image src={"/creative.svg"} alt="ms" boxSize={"full"} />
          </Box>
          <VStack alignItems={"start"} spacing={"15px"}>
            <VStack
              alignItems={"start"}
              spacing={["-5px", "-10px", "-10px", "-10px", "-10px", "-10px"]}
            >
              <chakra.h3
                fontFamily={"Poppins.black"}
                fontSize={["25px", "30px", "30px", "30px", "30px", "35px"]}
                fontWeight="black"
                letterSpacing={{
                  base: "normal",
                  md: "normal",
                }}
                color="#D74848"
                whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
              >
                Creative
              </chakra.h3>
              <chakra.h3
                fontFamily={"Poppins.black"}
                fontSize={["15px", "20px", "20px", "20px", "20px", "21px"]}
                fontWeight="thin"
                letterSpacing={{
                  base: "normal",
                  md: "normal",
                }}
                color="#FFFFFF"
                whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
              >
                More appeal
              </chakra.h3>
            </VStack>
            <chakra.p
              fontSize={["10px", "14px", "15px", "15px", "13px", "15px"]}
              color="white"
              maxW={["280px", "500px", "500px", "500px", "500px"]}
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
              fontFamily={"Poppins"}
            >
              In most cases, a collaboration is started based on the first
              impression. That’s why creative design is so important. To stand
              out visually.
            </chakra.p>
          </VStack>
        </VStack>
      </Flex>
    );
    sa;
  }

  function TypeOfServices() {
    const dummyData = [
      {
        title: "A WHOLE",
        icon: "/building.svg",
        subTitle: "Corporate Identity",

        description:
          "A specific identity offers recognisability and an authentic look. It is strongly recommended to give off the right feeling by using shapes, colors and visual images that matches the total vision.",
      },
      {
        title: "PRINTING",
        icon: "/print.svg",
        subTitle: "DTP Service",

        description:
          "DTP stands for desktop publishing and contains all kinds of printed things from traditional prints such as letter paper, flyers, business cards, etc. to original printed thing that reinforces the brand image.",
      },
      {
        title: "IDENTITY",
        icon: "/trademark.svg",
        subTitle: "Logo Design",

        description:
          "A logo is the hallmark of any organization. A point of recognition that partly determines the atmosphere which comes together with corporate identity style. The logo often gives a sense of the type of organization",
      },
      {
        title: "ONLINE IMPRESSION",
        icon: "/desktop.svg",
        subTitle: "Website Design",

        description:
          "The first impression is often acquired online. Potential customers and other types of relation usually already made their choice unconsciously based on the online representation.",
      },
      {
        title: "BRAND STRATEGY",
        icon: "/icons.svg",
        subTitle: "Branding Service",

        description:
          "You create brand awareness by getting the brand out there. Through merchandise, strategic partners or other branding activities you ensure that people feel involved with your brand.",
      },
      {
        title: "FUTURE ORIENTED",
        icon: "/upload.svg",
        subTitle: "Visual Concepting",

        description:
          "Before you start something new, conducting an investigation is a strategic decision. By mapping visually concepts it all becomes clear and tangible for everyone.",
      },
    ];

    return (
      <Flex
        flexDir={["column", "column", "row", "row", "row", "row"]}
        pb={"200px"}
      >
        <VStack alignItems={"start"} spacing={"55px"} width={"100%"} px={"10%"}>
          <Flex
            dir="row"
            justifyContent={["center", "center", "flex-start", "flex-start"]}
          >
            <chakra.h3
              fontFamily={"Poppins.black"}
              paddingY={["30px", "30px", "30px", "30px", "23px", "20px"]}
              fontSize={["30px", "40px", "40px", "40px", "40px", "50px"]}
              fontWeight="black"
              letterSpacing={{
                base: "normal",
                md: "normal",
              }}
              color="#111518"
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
            >
              {`Type of services`}
            </chakra.h3>
          </Flex>

          <SimpleGrid
            alignItems={"start"}
            alignSelf={"start"}
            justifyItems={"start"}
            spacingX={"150px"}
            spacingY={"100px"}
            columns={[1, 1, 1, 1, 3, 3]}
          >
            {dummyData.map((entry, index) => (
              <ServicesContainerPlain data={dummyData} dataIndex={index} />
            ))}
          </SimpleGrid>
        </VStack>
      </Flex>
    );
  }

  function OurService() {
    const dummyData = [
      {
        title: "Commercial",
        icon: "/commercial.svg",
        routeURL: "/services/commercial",
        subTitle: "More revenue",

        description:
          "We optimize your Sales and Marketing processes and aim to increase your reach and inbound/ outbound traffic of potential business",
      },
      {
        title: "Technical",
        icon: "/technical.svg",
        routeURL: "/services/technical",
        subTitle: "More efficiency",

        description:
          "Systems ensure that maximum work is getting done with minimal effort and time. We offer support, advice and development solutions.",
      },
    ];
    return (
      <Flex
        flexDir={["column", "column", "row", "row", "row", "row"]}
        pb={"100px"}
      >
        <VStack alignItems={"start"} spacing={"55px"} width={"100%"} px={"10%"}>
          <Flex
            dir="row"
            justifyContent={["center", "center", "flex-start", "flex-start"]}
          >
            <chakra.h3
              fontFamily={"Poppins.black"}
              paddingTop={["30px", "30px", "30px", "30px", "23px", "15px"]}
              fontSize={["30px", "40px", "40px", "40px", "40px", "50px"]}
              fontWeight="black"
              letterSpacing={{
                base: "normal",
                md: "normal",
              }}
              color="#111518"
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
            >
              {`Other Services`}
            </chakra.h3>
          </Flex>

          <SimpleGrid
            alignItems={"start"}
            alignSelf={"start"}
            justifyItems={"start"}
            spacingX={"80px"}
            spacingY={"50px"}
            columns={[1, 1, 1, 1, 3, 3]}
          >
            {dummyData.map((entry, index) => (
              <ServicesContainer data={dummyData} dataIndex={index} />
            ))}
          </SimpleGrid>
        </VStack>
      </Flex>
    );
  }

  return (
    <MotionFlex
      initial={{ opacity: 0 }}
      animate={{ opacity: 100, delay: 1 }}
      transition={{ ease: "easeIn", duration: 10, delay: 1 }}
    >
      <Box bgColor={"#F3F8FF"}>
        <CallToAction />
        <TypeOfServices />
        <OurService />
      </Box>
    </MotionFlex>
  );
}
