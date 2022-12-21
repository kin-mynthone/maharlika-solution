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
              "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
            <Image src={"/commercial.svg"} alt="ms" boxSize={"full"} />
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
                Commercial
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
                More revenue
              </chakra.h3>
            </VStack>
            <chakra.p
              fontSize={["10px", "14px", "15px", "15px", "13px", "15px"]}
              color="white"
              maxW={["280px", "500px", "500px", "500px", "500px"]}
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
              fontFamily={"Poppins"}
            >
              We optimize your Sales and Marketing processes and aim to increase
              your reach and inbound/outbound traffic of potential business.
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
        title: "STRATEGY",
        icon: "/brain.svg",
        subTitle: "Process Design",

        description:
          "A smooth process enables clarity and overview from the first contact with the prospect to the final delivery. A great design supports working focused and therefore increases more capacity and sales.",
      },
      {
        title: "SALES",
        icon: "/bolt.svg",
        subTitle: "Direct Sales",

        description:
          "Account managers and other sales employees are expensive people, that’s why it is essential that the salespeople are empowered and are working effectively towards generating more business.",
      },
      {
        title: "PARTNERS",
        icon: "/handshake.svg",
        subTitle: "Indirect Sales",

        description:
          "There is nothing more fun than earning money together. Establish strategic partner channels to generate more business and increase awareness in new segments. Partners help each other out.",
      },
      {
        title: "ENGAGE",
        icon: "/arrow.svg",
        subTitle: "Social Media",

        description:
          "Social media is a powerful medium that put feelings behind messages. Finding a balanced social media strategy is a big challenge. Many parties pay too much or too little attention to get this right.",
      },
      {
        title: "BRAND AWARENESS",
        icon: "/megaphone.svg",
        subTitle: "Online Marketing",

        description:
          "The marketing strategy approach has many different ways. Finding the right option takes a matter of experience and knowledge. A creative approach makes sure you will stand out.",
      },
      {
        title: "POTENTIALS",
        icon: "/presentation.svg",
        subTitle: "Lead Generation",

        description:
          "An essential part to keep the commercial engine running. Without leads, the chance to win deals are minimal. Know your target group and be aware of their whereabouts, so you will be able to approach them.",
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
        title: "Technical",
        icon: "/technical.svg",
        routeURL: "/services/technical",
        subTitle: "More efficiency",

        description:
          "Systems ensure that maximum work is getting done with minimal effort and time. We offer support, advice and development solutions.",
      },
      {
        title: "Creative",
        icon: "/creative.svg",
        routeURL: "/services/creative",

        subTitle: "More appeal",

        description:
          "In most cases, a collaboration is started based on the first impression. That’s why creative design is so important. To stand out visually.",
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
