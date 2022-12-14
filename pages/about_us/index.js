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
import {
  NewsContainer,
  NewsVideoContainer,
} from "../../constants/components/utilities";
import { msloading, bank, brain, agreement } from "../../constants/data";
import { FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BiChevronRight } from "react-icons/bi";

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

  function About() {
    return (
      <Flex
        flexDir={["column", "column", "row", "row", "row", "row"]}
        paddingTop={["20s%", "20%", "10%", "10%", "10%", "10%"]}
      >
        <VStack alignItems={"start"} spacing={"55px"} width={"100%"} px={"10%"}>
          <Flex
            dir="row"
            justifyContent={["center", "center", "flex-start", "flex-start"]}
          >
            <chakra.h3
              id="about"
              fontFamily={"Poppins.black"}
              paddingTop={["30px", "30px", "30px", "30px", "23px", "15px"]}
              paddingBottom={["50px", "50px", "50px", "50px", "50px", "50px"]}
              fontSize={["30px", "40px", "40px", "40px", "40px", "50px"]}
              fontWeight="black"
              letterSpacing={{
                base: "normal",
                md: "normal",
              }}
              color="#111518"
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
            >
              {`Know us `}
            </chakra.h3>
            <chakra.h3
              pl={3}
              fontFamily={"Poppins.black"}
              paddingTop={["30px", "30px", "30px", "30px", "23px", "15px"]}
              paddingBottom={["50px", "50px", "50px", "50px", "50px", "50px"]}
              fontSize={["30px", "40px", "40px", "40px", "40px", "50px"]}
              fontWeight="black"
              letterSpacing={{
                base: "normal",
                md: "normal",
              }}
              color="#00CE7C"
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
            >
              {` better`}
            </chakra.h3>
          </Flex>

          <VStack alignItems={"center"} width={"100%"}>
            <Box
              height={[180, 180, 180, 180, 180, 200]}
              width={[203, 303, 303, 303, 303, 503]}
              display="flex"
              alignItems="center"
              justifyContent={"center"}
            >
              <Image src={msloading} alt="ms icon png" draggable="false" />
            </Box>
            <chakra.h3
              fontFamily={"Poppins.black"}
              paddingTop={["30px", "30px", "30px", "30px", "23px", "15px"]}
              paddingBottom={["50px", "50px", "50px", "50px", "50px", "50px"]}
              fontSize={["20px", "25px", "25px", "25px", "25px", "30px"]}
              fontWeight="black"
              letterSpacing={{
                base: "normal",
                md: "normal",
              }}
              color="#111518"
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
            >
              {` Global Social Development Bank (GLSDB)`}
            </chakra.h3>
            <chakra.p
              mb={6}
              fontSize={["14px", "14px", "15px", "15px", "15px", "20px"]}
              color="#2C2B2B"
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
              fontFamily={"Poppins"}
            >
              {`The Global Social Development Bank (GLSDB), registered in the Kingdom of Belgium is a trusted partner for many investors, both in Europe as well across the Globe. With a team of experienced senior advisory consultants, they are advising their trusted partners and world’s top investment structures.

The GLSDB-team of senior executive consultants is able to advise you on project management by using the knowledge and experience of its team of experts in both the public and private sector. The GLSDB team has years of experience in undertaking challenging and comprehensive projects in both the private and public sector. We also have the resources and commitment to provide services in innovative sectors, on a technological and conceptual level, using an entrepreneurial mind-set. We will continuously strive to provide your business with the best support. After all: your success is our success. The GLSDB will guide you throughout the process while we also strive economic viability with our practical and creative advice. Below our services in three categories.`}
            </chakra.p>
          </VStack>
          <SimpleGrid
            alignItems={"center"}
            alignSelf={"center"}
            justifyItems={"center"}
            pt={["70px", "70px", "70px", "70px", "70px", "100px"]}
            spacingX={"200px"}
            spacingY={"50px"}
            width={"80%"}
            columns={[1, 1, 1, 1, 3, 3]}
          >
            <Box
              width={["280px", "280px", "280px", "280px", "320px", "380px"]}
              height={["400px", "400px", "400px", "400px", "400px", "450px"]}
              justifyContent={"start"}
              alignItems={"start"}
              px={"30px"}
              py={"50px"}
              backgroundColor={"#16365F"}
              borderStartStartRadius={"30px"}
              borderEndStartRadius={"30px"}
              borderStartEndRadius={"30px"}
              borderEndEndRadius={"30px"}
              style={{
                boxShadow: `0px 0px 30px rgba(0, 0, 0, 0.05) `,
              }}
            >
              <VStack alignItems={"start"} spacing={"20px"}>
                <Box w={["25%", "25%", "25%", "25%", "25%", "25%"]}>
                  <Image src={bank} alt="portfolio" />
                </Box>

                <chakra.p
                  mb={6}
                  fontSize={["14px", "14px", "15px", "15px", "15px", "18px"]}
                  color="white"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                  fontFamily={"Poppins"}
                >
                  {`Institute: In a close partnership with our corporate partners we offer client specific training and education related to the specific project or entrepreneurial challenges.
`}
                </chakra.p>
              </VStack>
            </Box>
            <Box
              width={["280px", "280px", "280px", "280px", "320px", "380px"]}
              height={["400px", "400px", "400px", "400px", "400px", "450px"]}
              justifyContent={"start"}
              alignItems={"start"}
              px={"30px"}
              py={"50px"}
              backgroundColor={"#16365F"}
              borderStartStartRadius={"30px"}
              borderEndStartRadius={"30px"}
              borderStartEndRadius={"30px"}
              borderEndEndRadius={"30px"}
              style={{
                boxShadow: `0px 0px 30px rgba(0, 0, 0, 0.05) `,
              }}
            >
              <VStack alignItems={"start"} spacing={"20px"}>
                <Box w={["25%", "25%", "25%", "25%", "25%", "25%"]}>
                  <Image src={agreement} alt="portfolio" />
                </Box>

                <chakra.p
                  mb={6}
                  fontSize={["14px", "14px", "15px", "15px", "15px", "18px"]}
                  color="white"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                  fontFamily={"Poppins"}
                >
                  {`Development: Creating long-term value for our trusted partners through support in developing and implementing growth opportunities between Governments, Non-Governmental organizations and corporate or financial structures.

`}
                </chakra.p>
              </VStack>
            </Box>
            <Box
              width={["280px", "280px", "280px", "280px", "320px", "380px"]}
              height={["400px", "400px", "400px", "400px", "400px", "450px"]}
              justifyContent={"start"}
              alignItems={"start"}
              px={"30px"}
              py={"50px"}
              backgroundColor={"#16365F"}
              borderStartStartRadius={"30px"}
              borderEndStartRadius={"30px"}
              borderStartEndRadius={"30px"}
              borderEndEndRadius={"30px"}
              style={{
                boxShadow: `0px 0px 30px rgba(0, 0, 0, 0.05) `,
              }}
            >
              <VStack alignItems={"start"} spacing={"20px"}>
                <Box w={["25%", "25%", "25%", "25%", "25%", "25%"]}>
                  <Image src={brain} alt="portfolio" />
                </Box>

                <chakra.p
                  mb={6}
                  fontSize={["14px", "14px", "15px", "15px", "15px", "18px"]}
                  color="white"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                  fontFamily={"Poppins"}
                >
                  {`Innovation: Various initiatives and ventures started over the last 20 years. The common denominator is to make this world a better place for all.


`}
                </chakra.p>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>
      </Flex>
    );
  }

  function WHoWeAre() {
    return (
      <Flex
        flexDir={["column", "column", "row", "row", "row", "row"]}
        paddingTop={["20%", "2%", "2%", "2%", "10%", "10%"]}
      >
        <VStack alignItems={"start"} spacing={"55px"} width={"100%"} px={"10%"}>
          <Flex
            id="whoweare"
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
              {`Who`}
            </chakra.h3>
            <chakra.h3
              pl={3}
              fontFamily={"Poppins.black"}
              paddingTop={["30px", "30px", "30px", "30px", "23px", "15px"]}
              fontSize={["30px", "40px", "40px", "40px", "40px", "50px"]}
              fontWeight="black"
              letterSpacing={{
                base: "normal",
                md: "normal",
              }}
              color="#00CE7C"
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
            >
              {` we are`}
            </chakra.h3>
          </Flex>
          <SimpleGrid
            alignItems={"start"}
            alignSelf={"start"}
            justifyItems={"start"}
            spacingX={"10px"}
            spacingY={"50px"}
            columns={[1, 1, 1, 1, 3, 3]}
          >
            <HStack alignItems={"start"} w={"80%"}>
              <CircleIcon boxSize={3} mt={1.5} />
              <Text>
                We are an impartial enabling governance body for Social Economic
                Transformation. We engage Government, Business and Community.
              </Text>
            </HStack>
            <HStack alignItems={"start"} w={"80%"}>
              <CircleIcon boxSize={3} mt={1.5} />
              <Text>
                We are an impartial enabling governance body for Social Economic
                Transformation. We engage Government, Business and Community.
              </Text>
            </HStack>
            <HStack alignItems={"start"} w={"80%"}>
              <CircleIcon boxSize={3} mt={1.5} />
              <Text>
                We are an impartial enabling governance body for Social Economic
                Transformation. We engage Government, Business and Community.
              </Text>
            </HStack>
          </SimpleGrid>
        </VStack>
      </Flex>
    );
  }

  function WhatWeDo() {
    return (
      <Flex
        flexDir={["column", "column", "row", "row", "row", "row"]}
        paddingTop={["20%", "2%", "2%", "2%", "10%", "10%"]}
      >
        <VStack alignItems={"start"} spacing={"55px"} width={"100%"} px={"10%"}>
          <Flex
            dir="row"
            justifyContent={["center", "center", "flex-start", "flex-start"]}
          >
            <chakra.h3
              id="whatwedo"
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
              {`What`}
            </chakra.h3>
            <chakra.h3
              pl={3}
              fontFamily={"Poppins.black"}
              paddingTop={["30px", "30px", "30px", "30px", "23px", "15px"]}
              fontSize={["30px", "40px", "40px", "40px", "40px", "50px"]}
              fontWeight="black"
              letterSpacing={{
                base: "normal",
                md: "normal",
              }}
              color="#00CE7C"
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
            >
              {` we do`}
            </chakra.h3>
          </Flex>
          <SimpleGrid
            alignItems={"start"}
            alignSelf={"start"}
            justifyItems={"start"}
            spacingX={"10px"}
            spacingY={"50px"}
            columns={[1, 1, 1, 1, 3, 3]}
          >
            <HStack alignItems={"start"} w={"80%"}>
              <CircleIcon boxSize={3} mt={1.5} />
              <Text>
                Promote societal welfare and prosperity through equitable
                distribution of capital, access to collaborative networks and
                opportunities.
              </Text>
            </HStack>
            <HStack alignItems={"start"} w={"80%"}>
              <CircleIcon boxSize={3} mt={1.5} />
              <Text>
                The Global Social Development Bank’s operating model safeguard
                the project integrity for all party’s related.
              </Text>
            </HStack>

            <HStack alignItems={"start"} w={"80%"}>
              <CircleIcon boxSize={3} mt={1.5} />
              <Text>
                Lead Societal impact projects are led by the Global Social
                Development Bank and its mandated local agency.
              </Text>
            </HStack>
            <HStack alignItems={"start"} w={"80%"}>
              <CircleIcon boxSize={3} mt={1.5} />
              <Text>
                Generate Impact indicators expressed as social returns such as
                increasing numbers of students, form new businesses and create
                jobs.
              </Text>
            </HStack>
            <HStack alignItems={"start"} w={"80%"}>
              <CircleIcon boxSize={3} mt={1.5} />
              <Text>
                All our projects are aligned with the Social Development Goals
                of the United Nations.
              </Text>
            </HStack>
            <HStack alignItems={"start"} w={"80%"}>
              <CircleIcon boxSize={3} mt={1.5} />
              <Text>
                Principles applied by the Global Social Development Bank of
                combating bribery and corruption are underlined by separating
                the funding from the project Governance, deploying third-party
                regulators and audits. The budget sovereignty is retained by the
                Global Social Development Bank, whilst the project is controlled
                by the local Project Management Office, both monitored by
                external auditors.
              </Text>
            </HStack>
          </SimpleGrid>
        </VStack>
      </Flex>
    );
  }

  function WorkWithUs() {
    return (
      <Flex
        flexDir={["column", "column", "row", "row", "row", "row"]}
        height={["60em", "60em", "60em", "60em", "100vh", "80vh"]}
        bgColor={"#16365F"}
        mt={["20%", "2%", "2%", "2%", "10%", "10%"]}
        alignItems={"end"}
        justifyContent={"end"}
      >
        <Box
          boxSize="full"
          objectFit="cover"
          background={`url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`}
        ></Box>

        <VStack
          mr={[0, 10, 10, 10, 10, 10]}
          mb={[0, 10, 10, 10, 10, 10]}
          px={"3%"}
          position={"absolute"}
          bgColor={"rgba(255, 255, 255, 0.9)"}
          spacing={"80px"}
          borderRadius={"20px"}
          alignItems={"start"}
          width={["100%", "62%", "62%", "62%", "62%", "48%"]}
          zIndex={10}
          paddingY={"40px"}
        >
          <VStack spacing={"55px"}>
            <VStack alignItems={"start"} spacing={"-2px"} width={"100%"}>
              <Flex
                dir="row"
                justifyContent={[
                  "center",
                  "center",
                  "flex-start",
                  "flex-start",
                ]}
              >
                <chakra.h3
                  id="workwithus"
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
                  {`Work with`}
                </chakra.h3>
                <chakra.h3
                  pl={3}
                  fontFamily={"Poppins.black"}
                  paddingTop={["30px", "30px", "30px", "30px", "23px", "15px"]}
                  fontSize={["30px", "40px", "40px", "40px", "40px", "50px"]}
                  fontWeight="black"
                  letterSpacing={{
                    base: "normal",
                    md: "normal",
                  }}
                  color="#00CE7C"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                >
                  {` us`}
                </chakra.h3>
              </Flex>

              <chakra.p
                fontSize={["14px", "14px", "15px", "15px", "15px", "18px"]}
                color="#111518"
                whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                fontFamily={"Poppins"}
              >
                {`Information on working with GSD for:
`}
              </chakra.p>
            </VStack>
            <SimpleGrid
              alignItems={"start"}
              alignSelf={"start"}
              justifyItems={"start"}
              w={"100%"}
              spacingX={"10px"}
              spacingY={"30px"}
              columns={[1, 1, 1, 1, 2, 2]}
            >
              <HStack alignItems={"start"} w={"100%"}>
                <CircleIcon boxSize={3} mt={1.5} />
                <Text>Consultants</Text>
              </HStack>
              <HStack alignItems={"start"} w={"100%"}>
                <CircleIcon boxSize={3} mt={1.5} />
                <Text>Development Institutions</Text>
              </HStack>
              <HStack alignItems={"start"} w={"100%"}>
                <CircleIcon boxSize={3} mt={1.5} />
                <Text>Contractors and Suppliers</Text>
              </HStack>
              <HStack alignItems={"start"} w={"100%"}>
                <CircleIcon boxSize={3} mt={1.5} />
                <Text>Private Sector Partners</Text>
              </HStack>
              <HStack alignItems={"start"} w={"100%"}>
                <CircleIcon boxSize={3} mt={1.5} />
                <Text>Governments</Text>
              </HStack>
              <HStack alignItems={"start"} w={"100%"}>
                <CircleIcon boxSize={3} mt={1.5} />
                <Text>Civil Society/Nonzagovernment Organizations</Text>
              </HStack>
              <HStack alignItems={"start"} w={"100%"}>
                <CircleIcon boxSize={3} mt={1.5} />
                <Text>Executing and Implementing Agencies</Text>
              </HStack>
              <HStack alignItems={"start"} w={"100%"}>
                <CircleIcon boxSize={3} mt={1.5} />
                <Text>All Audiences </Text>
              </HStack>
            </SimpleGrid>
          </VStack>
          <SimpleGrid
            alignItems={"start"}
            alignSelf={"start"}
            justifyItems={"start"}
            w={"100%"}
            spacingX={"10px"}
            spacingY={"10px"}
            columns={[1, 1, 1, 1, 3, 3]}
          >
            <MotionButton
              px={"30px"}
              py={"30px"}
              whileTap={{
                scale: 0.9,
              }}
              whileHover={{
                scale: 1.1,
              }}
              backgroundColor={"#D74848"}
              _focus={{ border: "none" }}
              _focusWithin={{ backgroundColor: "#D74848" }}
              _hover={{
                backgroundColor: "#D74848",
                cursor: "pointer",
              }}
              flexDirection={"row"}
              onClick={null} //update this
            >
              <Text fontSize="14px" color={"white"}>
                Careers and Scholarships
              </Text>
            </MotionButton>
            <MotionButton
              px={"30px"}
              py={"30px"}
              whileTap={{
                scale: 0.9,
              }}
              whileHover={{
                scale: 1.1,
              }}
              backgroundColor={"#D74848"}
              _focus={{ border: "none" }}
              _focusWithin={{ backgroundColor: "#D74848" }}
              _hover={{
                backgroundColor: "#D74848",
                cursor: "pointer",
              }}
              flexDirection={"row"}
              onClick={null} //update this
            >
              <Text fontSize="14px" color={"white"}>
                Operational Procurement
              </Text>
            </MotionButton>
            <MotionButton
              px={"30px"}
              py={"30px"}
              whileTap={{
                scale: 0.9,
              }}
              whileHover={{
                scale: 1.1,
              }}
              backgroundColor={"#D74848"}
              _focus={{ border: "none" }}
              _focusWithin={{ backgroundColor: "#D74848" }}
              _hover={{
                backgroundColor: "#D74848",
                cursor: "pointer",
              }}
              flexDirection={"row"}
              onClick={null} //update this
            >
              <Text fontSize="14px" color={"white"}>
                Instuitutional Procurement
              </Text>
            </MotionButton>
          </SimpleGrid>
        </VStack>
      </Flex>
    );
  }

  const CircleIcon = (props) => (
    <Icon viewBox="0 0 200 200" {...props}>
      <path
        fill="currentColor"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />
    </Icon>
  );

  return (
    <MotionFlex
      initial={{ opacity: 0 }}
      animate={{ opacity: 100, delay: 1 }}
      transition={{ ease: "easeIn", duration: 10, delay: 1 }}
    >
      <Box bgColor={"white"}>
        <About />
        <WHoWeAre />
        <WhatWeDo />
        <WorkWithUs />
      </Box>
    </MotionFlex>
  );
}
