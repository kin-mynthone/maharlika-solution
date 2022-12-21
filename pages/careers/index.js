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

import { MotionButton, MotionFlex } from "../../constants/components/motion";
import { chakra } from "@chakra-ui/react";

import { startUpStore } from "../../store/start_up";
import { useState, useEffect } from "react";

import { useWindowSize } from "../../custom_hooks";

import {
  JobsContainer,
  ServicesContainer,
} from "../../constants/components/utilities";

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
              "https://images.unsplash.com/photo-1562664348-2188b99b5157?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
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
          <VStack alignItems={"start"} spacing={"15px"}>
            <chakra.h3
              fontFamily={"Poppins.black"}
              fontSize={["25px", "30px", "30px", "30px", "30px", "35px"]}
              fontWeight="black"
              letterSpacing={{
                base: "normal",
                md: "normal",
              }}
              color="white"
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
            >
              Career Opportunities
            </chakra.h3>
            <chakra.p
              fontSize={["10px", "14px", "15px", "15px", "13px", "15px"]}
              color="white"
              maxW={["280px", "500px", "500px", "500px", "500px"]}
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
              fontFamily={"Poppins"}
            >
              We are looking for talented people, Join our talented and work in
              an amazing work space
            </chakra.p>
          </VStack>
        </VStack>
      </Flex>
    );
    sa;
  }

  function TechnicalJobs() {
    const dummyData = [
      {
        title: "Fullstack Developer",

        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
      },
      {
        title: "Flutter Developer",

        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
      },
      {
        title: "Web Developer",

        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
      },

      {
        title: "DevOps",

        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
      },

      {
        title: "QA - Automation",

        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
      },

      {
        title: "QA - Manual",

        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
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
              id="tj"
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
              {`Technical Jobs`}
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
              <JobsContainer data={dummyData} dataIndex={index} />
            ))}
          </SimpleGrid>
        </VStack>
      </Flex>
    );
  }

  function CreativeJobs() {
    const dummyData = [
      {
        title: "Graphic Designer",

        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
      },
      {
        title: "UX Designer",

        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
      },
      {
        title: "UI Designer",

        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
      },

      {
        title: "Photographer",

        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
      },

      {
        title: "Multimedia animator",

        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
      },

      {
        title: "Promotions manager",

        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
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
              id="cj"
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
              {`Creative Jobs`}
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
              <JobsContainer data={dummyData} dataIndex={index} />
            ))}
          </SimpleGrid>
        </VStack>
      </Flex>
    );
  }

  function AdminJobs() {
    const dummyData = [
      {
        title: "Human Resource",

        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
      },
      {
        title: "Project Manager",

        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
      },
      {
        title: "Business Analyst",

        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
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
              id="aj"
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
              {`Admin Jobs`}
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
              <JobsContainer data={dummyData} dataIndex={index} />
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
        <TechnicalJobs />
        <CreativeJobs />
        <AdminJobs />
      </Box>
    </MotionFlex>
  );
}
