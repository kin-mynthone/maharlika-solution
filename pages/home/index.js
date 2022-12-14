import {
  Box,
  Flex,
  IconButton,
  Text,
  useColorModeValue,
  useToast,
  VStack,
  HStack,
  Icon,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

import { IoIosRocket } from "react-icons/io";

import { MotionButton, MotionFlex } from "../../constants/components/motion";
import { chakra } from "@chakra-ui/react";

import { startUpStore } from "../../store/start_up";
import { useState, useEffect } from "react";
import { cta_image, nl_image, growth } from "../../constants/data";
import { useWindowSize } from "../../custom_hooks";
import {
  CharacteristicContainer,
  ServicesContainer,
} from "../../constants/components/utilities";

import { MdNotificationsActive } from "react-icons/md";
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
        flexDir={["column", "column", "row", "row", "row", "row"]}
        height={["48em", "60em", "60em", "60em", "100vh", "100vh"]}
        alignItems={"center"}
        w={width}
      >
        <Box
          pt={["4em", "4em", "4em", "4em", "4em", "4em"]}
          px={["7%", "7%", "7%", "7%", "7%", "7%"]}
          w={"full"}
        >
          <Flex
            alignItems={"center"}
            width={"full"}
            flexDir={["column", "column", "row", "row", "row", "row"]}
          >
            <Box
              w={["100%", "55%", "55%", "55%", "60%", "50%"]}
              height={["20em", "60em", "60em", "60em", "100vh", "100vh"]}
              alignItems={"center"}
              justifyContent={"center"}
              display={{
                base: "flex",
                md: "none",
              }}
            >
              <Box
                w={["60%", "55%", "55%", "55%", "42%", "40%"]}
                alignItems={"end"}
                zIndex={10}
                draggable={"false"}
                position={"absolute"}
                style={{
                  userSelect: "none",
                }}
              >
                <Image src={cta_image} alt="ms" />
              </Box>
              <Box
                boxSize={"sm"}
                position={"absolute"}
                objectFit="cover"
                borderRadius={"full"}
                mt={["50px", "200px", "200px", "200px", "200px", "200px"]}
                mr={["50px", "200px", "200px", "200px", "200px", "200px"]}
                background="radial-gradient(rgba(241, 249, 192, 0.8)  10%, transparent 70%)"
              />
              <Box
                boxSize={"sm"}
                objectFit="cover"
                borderRadius={"full"}
                mb={["50px", "200px", "200px", "200px", "200px", "200px"]}
                ml={["50px", "200px", "200px", "200px", "200px", "200px"]}
                background="radial-gradient(rgba(249, 192, 192, 0.8)  10%, transparent 70%)"
              />
            </Box>

            <VStack
              alignItems={"start"}
              width={["100%", "100%", "62%", "62%", "40%", "45%"]}
            >
              <VStack
                spacing={["-5px", "-10px", "-10px", "-10px", "-10px", "-20px"]}
                alignItems={"start"}
              >
                <chakra.h3
                  fontFamily={"Poppins.black"}
                  fontSize={["30px", "40px", "40px", "40px", "55px", "75px"]}
                  fontWeight="black"
                  letterSpacing={{
                    base: "normal",
                    md: "normal",
                  }}
                  color="#111518"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                >
                  {`Smart Solution `}
                </chakra.h3>
                <chakra.h3
                  fontFamily={"Poppins.black"}
                  fontSize={["30px", "40px", "40px", "40px", "55px", "75px"]}
                  fontWeight="black"
                  letterSpacing={{
                    base: "normal",
                    md: "normal",
                  }}
                  color="#111518"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                >
                  {`that gives greater`}
                </chakra.h3>
                <chakra.h3
                  fontFamily={"Poppins.black"}
                  fontSize={["30px", "40px", "40px", "40px", "55px", "75px"]}
                  fontWeight="black"
                  letterSpacing={{
                    base: "normal",
                    md: "normal",
                  }}
                  color="#D74848"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                >
                  {`opportunities`}
                </chakra.h3>
              </VStack>

              <VStack alignItems={"start"} spacing={9}>
                <Text
                  mb={6}
                  fontSize={["14px", "14px", "15px", "15px", "15px", "15px"]}
                  color="#2C2B2B"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                  fontFamily={"Poppins"}
                >
                  We’re a team of design and development experts who help you
                  transform and scale up your organization.
                </Text>
                <HStack spacing={[5, 9, 9, 9, 5, 5]}>
                  <MotionButton
                    py={"25px"}
                    backgroundColor={"#D74848"}
                    border="1px"
                    // style={{
                    //   boxShadow: `0px 0px 30px #D74848`,
                    // }}
                    borderColor="#D74848"
                    _focus={{ borderColor: "#D74848" }}
                    _focusWithin={{
                      backgroundColor: "#D74848",
                      borderColor: "#D74848",
                    }}
                    _hover={{
                      backgroundColor: "#D74848",
                      borderColor: "#D74848",
                    }}
                    borderRadius={10}
                    whileTap={{
                      scale: 1,
                    }}
                    whileHover={{
                      scale: 1.1,
                    }}
                    onClick={() => {}}
                  >
                    <IoIosRocket size={"20px"} color={"white"} />

                    <Text
                      fontSize={[
                        "12px",
                        "12px",
                        "12px",
                        "12px",
                        "15px",
                        "15px",
                      ]}
                      color={"white"}
                      pl={"10px"}
                    >
                      Start your project
                    </Text>
                  </MotionButton>
                  <MotionButton
                    py={"25px"}
                    px={"30px"}
                    backgroundColor={"transparent"}
                    border="1px"
                    borderColor="#D74848"
                    _focus={{ borderColor: "#D74848" }}
                    _focusWithin={{
                      backgroundColor: "transparent",
                      borderColor: "#D74848",
                    }}
                    _hover={{
                      backgroundColor: "transparent",
                      borderColor: "#D74848",
                    }}
                    borderRadius={10}
                    whileTap={{
                      scale: 1,
                    }}
                    whileHover={{
                      scale: 1.1,
                    }}
                    onClick={() => {}}
                  >
                    <Text
                      fontSize={[
                        "12px",
                        "12px",
                        "12px",
                        "12px",
                        "15px",
                        "15px",
                      ]}
                      color={"#D74848"}
                    >
                      Get in Touch
                    </Text>
                  </MotionButton>
                </HStack>
              </VStack>
            </VStack>

            <Spacer />
            <Box
              w={["55%", "55%", "55%", "55%", "60%", "50%"]}
              height={["60em", "60em", "60em", "60em", "100vh", "100vh"]}
              alignItems={"center"}
              justifyContent={"center"}
              display={{
                base: "none",
                md: "flex",
              }}
            >
              <Box
                w={["55%", "55%", "55%", "55%", "42%", "40%"]}
                alignItems={"end"}
                zIndex={10}
                draggable={"false"}
                position={"absolute"}
                style={{
                  userSelect: "none",
                }}
              >
                <Image src={cta_image} alt="ms" />
              </Box>
              <Box
                boxSize={"4xl"}
                position={"absolute"}
                objectFit="cover"
                borderRadius={"full"}
                mt={"250px"}
                mr={"250px"}
                background="radial-gradient(rgba(241, 249, 192, 0.8)  10%, transparent 70%)"
              />
              <Box
                boxSize="4xl"
                objectFit="cover"
                borderRadius={"full"}
                mb={"250px"}
                ml={"250px"}
                background="radial-gradient(rgba(249, 192, 192, 0.8)  10%, transparent 70%)"
              />
            </Box>
          </Flex>
        </Box>
      </Flex>
    );
  }

  function NextLevel() {
    return (
      <Flex
        flexDir={["column", "column", "row", "row", "row", "row"]}
        height={["48em", "60em", "60em", "60em", "100vh", "100vh"]}
        alignItems={"center"}
        w={width}
      >
        <Box
          pt={["2em", "4em", "4em", "4em", "4em", "4em"]}
          px={["7%", "7%", "7%", "7%", "7%", "7%"]}
          w={"full"}
        >
          <Flex
            alignItems={"center"}
            width={"full"}
            flexDir={["column", "column", "row", "row", "row", "row"]}
          >
            <Box
              w={["100%", "55%", "55%", "55%", "60%", "50%"]}
              height={["20em", "60em", "60em", "60em", "100vh", "100vh"]}
              alignItems={"center"}
              justifyContent={"center"}
              display={{
                base: "flex",
                md: "none",
              }}
            >
              <Box
                w={["60%", "55%", "55%", "55%", "42%", "40%"]}
                alignItems={"end"}
                zIndex={10}
                draggable={"false"}
                position={"absolute"}
                style={{
                  userSelect: "none",
                }}
              >
                <Image src={nl_image} alt="ms" />
              </Box>
              <Box
                boxSize={"sm"}
                position={"absolute"}
                objectFit="cover"
                borderRadius={"full"}
                mt={["50px", "200px", "200px", "200px", "200px", "200px"]}
                mr={["50px", "200px", "200px", "200px", "200px", "200px"]}
                background="radial-gradient(rgba(241, 249, 192, 0.8)  10%, transparent 70%)"
              />
              <Box
                boxSize={"sm"}
                objectFit="cover"
                borderRadius={"full"}
                mb={["50px", "200px", "200px", "200px", "200px", "200px"]}
                ml={["50px", "200px", "200px", "200px", "200px", "200px"]}
                background="radial-gradient(rgba(249, 192, 192, 0.8)  10%, transparent 70%)"
              />
            </Box>

            <Box
              w={["55%", "55%", "55%", "55%", "50%", "50%"]}
              height={["60em", "60em", "60em", "60em", "100vh", "100vh"]}
              alignItems={"center"}
              justifyContent={"center"}
              display={{
                base: "none",
                md: "flex",
              }}
            >
              <Box
                w={["55%", "55%", "55%", "55%", "35%", "40%"]}
                alignItems={"end"}
                zIndex={10}
                draggable={"false"}
                position={"absolute"}
                style={{
                  userSelect: "none",
                }}
              >
                <Image src={nl_image} alt="ms" />
              </Box>
              <Box
                boxSize="xl"
                position={"absolute"}
                objectFit="cover"
                borderRadius={"full"}
                mt={"200px"}
                mr={"200px"}
                background="radial-gradient(rgba(241, 249, 192, 0.8)  10%, transparent 70%)"
              />
              <Box
                boxSize="xl"
                objectFit="cover"
                borderRadius={"full"}
                mb={"200px"}
                ml={"200px"}
                background="radial-gradient(rgba(249, 192, 192, 0.8)  10%, transparent 70%)"
              />
            </Box>
            <Spacer />
            <VStack
              alignItems={"start"}
              width={["100%", "100%", "62%", "62%", "60%", "60%"]}
            >
              <VStack
                spacing={["-5px", "-10px", "-10px", "-10px", "-10px", "-20px"]}
                alignItems={"start"}
              >
                <chakra.h3
                  fontFamily={"Poppins.black"}
                  fontSize={["28px", "40px", "40px", "40px", "45px", "60px"]}
                  fontWeight="black"
                  letterSpacing={{
                    base: "normal",
                    md: "normal",
                  }}
                  color="#111518"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                >
                  {`We help organizations`}
                </chakra.h3>
                <HStack>
                  {" "}
                  <chakra.h3
                    fontFamily={"Poppins.black"}
                    fontSize={["28px", "40px", "40px", "40px", "45px", "60px"]}
                    fontWeight="black"
                    letterSpacing={{
                      base: "normal",
                      md: "normal",
                    }}
                    color="#111518"
                    whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                  >
                    {`reaching the`}
                  </chakra.h3>
                  <chakra.h3
                    pl={["1px", "12px", "12px", "12px", "8px", "12px"]}
                    fontFamily={"Poppins.black"}
                    fontSize={["28px", "40px", "40px", "40px", "45px", "60px"]}
                    fontWeight="black"
                    letterSpacing={{
                      base: "normal",
                      md: "normal",
                    }}
                    color="#D74848"
                    whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                  >
                    {`next level`}
                  </chakra.h3>
                </HStack>
              </VStack>

              <VStack alignItems={"start"} spacing={"30px"}>
                <Text
                  mb={6}
                  fontSize={["14px", "14px", "15px", "15px", "15px", "15px"]}
                  color="#2C2B2B"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                  fontFamily={"Poppins"}
                >
                  We do this by combining three different specialties to achieve
                  great results.
                </Text>
                <VStack
                  alignItems={"start"}
                  justifyContent={"space-evenly"}
                  spacing={8}
                >
                  <Text
                    fontSize={["14px", "14px", "15px", "15px", "15px", "15px"]}
                    color="#2C2B2B"
                    whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                    fontFamily={"Poppins"}
                  >
                    1. Optimize commercial activities and processes.
                  </Text>
                  <Text
                    fontSize={["14px", "14px", "15px", "15px", "15px", "15px"]}
                    color="#2C2B2B"
                    whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                    fontFamily={"Poppins"}
                  >
                    2. Integrate technical systems which promotes efficiency.
                  </Text>
                  <Text
                    fontSize={["14px", "14px", "15px", "15px", "15px", "15px"]}
                    color="#2C2B2B"
                    whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                    fontFamily={"Poppins"}
                  >
                    3. Creative representation design for an attractive
                    appearance.
                  </Text>
                </VStack>
              </VStack>
            </VStack>
          </Flex>
        </Box>
      </Flex>
    );
  }

  function OurService() {
    const dummyData = [
      {
        title: "Commercial",
        icon: "commercial.svg",
        subTitle: "More revenue",

        description:
          "We optimize your Sales and Marketing processes and aim to increase your reach and inbound/ outbound traffic of potential business",
      },
      {
        title: "Technical",
        icon: "technical.svg",
        subTitle: "More efficiency",

        description:
          "Systems ensure that maximum work is getting done with minimal effort and time. We offer support, advice and development solutions.",
      },
      {
        title: "Creative",
        icon: "creative.svg",
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
              {`Our `}
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
              color="#D74848"
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
            >
              {` Services`}
            </chakra.h3>
          </Flex>

          <SimpleGrid
            alignItems={"start"}
            alignSelf={"center"}
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

  function Growth() {
    return (
      <Flex
        flexDir={["column", "column", "row", "row", "row", "row"]}
        height={["60em", "60em", "60em", "60em", "100vh", "100vh"]}
        alignItems={"center"}
        w={width}
      >
        <Box
          pt={["5em", "4em", "4em", "4em", "4em", "4em"]}
          px={["7%", "7%", "7%", "7%", "7%", "7%"]}
          w={"full"}
        >
          <Flex
            alignItems={"center"}
            width={"full"}
            flexDir={["column", "column", "row", "row", "row", "row"]}
          >
            <Box
              w={["100%", "55%", "55%", "55%", "60%", "50%"]}
              height={["20em", "60em", "60em", "60em", "100vh", "100vh"]}
              alignItems={"center"}
              justifyContent={"center"}
              display={{
                base: "flex",
                md: "none",
              }}
            >
              <Box
                w={["60%", "55%", "55%", "55%", "42%", "40%"]}
                alignItems={"end"}
                zIndex={10}
                draggable={"false"}
                position={"absolute"}
                style={{
                  userSelect: "none",
                }}
              >
                <Image src={growth} alt="ms" />
              </Box>
              <Box
                boxSize={"sm"}
                position={"absolute"}
                objectFit="cover"
                borderRadius={"full"}
                mt={["50px", "200px", "200px", "200px", "200px", "200px"]}
                mr={["50px", "200px", "200px", "200px", "200px", "200px"]}
                background="radial-gradient(rgba(241, 249, 192, 0.8)  10%, transparent 70%)"
              />
              <Box
                boxSize={"sm"}
                objectFit="cover"
                borderRadius={"full"}
                mb={["50px", "200px", "200px", "200px", "200px", "200px"]}
                ml={["50px", "200px", "200px", "200px", "200px", "200px"]}
                background="radial-gradient(rgba(249, 192, 192, 0.8)  10%, transparent 70%)"
              />
            </Box>
            <VStack
              alignItems={"start"}
              width={["100%", "100%", "62%", "62%", "60%", "60%"]}
              spacing={"30px"}
            >
              <VStack
                spacing={["-5px", "-10px", "-10px", "-10px", "-10px", "-20px"]}
                alignItems={"start"}
              >
                <HStack
                  spacing={["5px", "8px", "8px", "8px", "8px", "8px"]}
                  pb={1}
                >
                  <Text
                    fontSize={["18px", "14px", "15px", "15px", "25px", "30px"]}
                    color="#2C2B2B"
                    whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                    fontFamily={"Poppins"}
                  >
                    Stimulate
                  </Text>
                  <Text
                    fontSize={["14px", "14px", "15px", "15px", "25px", "30px"]}
                    color="#D74848"
                    whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                    fontFamily={"Poppins"}
                  >
                    Growth
                  </Text>
                </HStack>
                <chakra.h3
                  fontFamily={"Poppins.black"}
                  fontSize={["28px", "40px", "40px", "40px", "45px", "60px"]}
                  fontWeight="black"
                  letterSpacing={{
                    base: "normal",
                    md: "normal",
                  }}
                  color="#111518"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                >
                  {`Create a strategy that`}
                </chakra.h3>
                <chakra.h3
                  fontFamily={"Poppins.black"}
                  fontSize={["28px", "40px", "40px", "40px", "45px", "60px"]}
                  fontWeight="black"
                  letterSpacing={{
                    base: "normal",
                    md: "normal",
                  }}
                  color="#D74848"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                >
                  {`works for you`}
                </chakra.h3>
              </VStack>

              <VStack alignItems={"start"} spacing={"20px"}>
                <Text
                  mb={6}
                  fontSize={["14px", "14px", "15px", "15px", "15px", "15px"]}
                  color="#2C2B2B"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                  fontFamily={"Poppins"}
                  maxW={"70%"}
                >
                  Before you achieve growth, a strategy is needed that provides
                  clarity about the road to follow and a practical way to get
                  there. Therefore, it is necessary to determine the starting
                  position.
                </Text>

                <MotionButton
                  py={"25px"}
                  px={"25px"}
                  backgroundColor={"#D74848"}
                  border="1px"
                  // style={{
                  //   boxShadow: `0px 0px 30px #D74848`,
                  // }}
                  borderColor="#D74848"
                  _focus={{ borderColor: "#D74848" }}
                  _focusWithin={{
                    backgroundColor: "#D74848",
                    borderColor: "#D74848",
                  }}
                  _hover={{
                    backgroundColor: "#D74848",
                    borderColor: "#D74848",
                  }}
                  borderRadius={10}
                  whileTap={{
                    scale: 1,
                  }}
                  whileHover={{
                    scale: 1.1,
                  }}
                  onClick={() => {}}
                >
                  <MdNotificationsActive size={"20px"} color={"white"} />

                  <Text
                    fontSize={["12px", "12px", "12px", "12px", "15px", "15px"]}
                    color={"white"}
                    pl={"10px"}
                  >
                    Notify Us
                  </Text>
                </MotionButton>
              </VStack>
            </VStack>
            <Spacer />
            <Box
              w={["55%", "55%", "55%", "55%", "50%", "50%"]}
              height={["60em", "60em", "60em", "60em", "100vh", "100vh"]}
              alignItems={"center"}
              justifyContent={"center"}
              display={{
                base: "none",
                md: "flex",
              }}
            >
              <Box
                w={["55%", "55%", "55%", "55%", "35%", "30%"]}
                alignItems={"end"}
                zIndex={10}
                draggable={"false"}
                position={"absolute"}
                style={{
                  userSelect: "none",
                }}
              >
                <Image src={growth} alt="ms" />
              </Box>
              <Box
                boxSize="xl"
                position={"absolute"}
                objectFit="cover"
                borderRadius={"full"}
                mt={"200px"}
                mr={"200px"}
                background="radial-gradient(rgba(241, 249, 192, 0.8)  10%, transparent 70%)"
              />
              <Box
                boxSize="xl"
                objectFit="cover"
                borderRadius={"full"}
                mb={"200px"}
                ml={"200px"}
                background="radial-gradient(rgba(249, 192, 192, 0.8)  10%, transparent 70%)"
              />
            </Box>
          </Flex>
        </Box>
      </Flex>
    );
  }

  function Characteristic() {
    const dummyData = [
      {
        title: "Creative",
        icon: "creative.svg",

        description:
          "This allows us to think along and exchange new ideas with you. Which in turn have a positive influence on customer experience.",
      },
      {
        title: "Integrity",
        icon: "integrity.svg",

        description:
          "Doing business means to us, adding value to each other. And we believe that we can only be valuable when working genuinely.",
      },
      {
        title: "Result driven",
        icon: "result_driven.svg",

        description:
          "Your ambition is our ambition, growth does not happen on its own, it is an interaction of various incentives.",
      },
      {
        title: "Efficient",
        icon: "efficient.svg",

        description:
          "Why would we make a fuss if simple is much clearer? We ensure that things are simple and therefore more transparent.",
      },
    ];
    return (
      <Flex
        flexDir={["column", "column", "row", "row", "row", "row"]}
        alignItems={"start"}
        pb={"200px"}
        w={width}
      >
        <Box px={["7%", "7%", "7%", "7%", "7%", "7%"]} w={"full"}>
          <Flex
            alignItems={"start"}
            width={"full"}
            flexDir={["column", "column", "row", "row", "row", "row"]}
          >
            <VStack alignItems={"start"} spacing={"1s0px"}>
              <HStack
                spacing={["10px", "15px", "15px", "15px", "15px", "15px"]}
                alignItems={"start"}
              >
                <chakra.h3
                  fontFamily={"Poppins.black"}
                  fontSize={["28px", "40px", "40px", "40px", "45px", "60px"]}
                  fontWeight="black"
                  letterSpacing={{
                    base: "normal",
                    md: "normal",
                  }}
                  color="#111518"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                >
                  {`Our`}
                </chakra.h3>
                <chakra.h3
                  fontFamily={"Poppins.black"}
                  fontSize={["28px", "40px", "40px", "40px", "45px", "60px"]}
                  fontWeight="black"
                  letterSpacing={{
                    base: "normal",
                    md: "normal",
                  }}
                  color="#D74848"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                >
                  {`Characteristic `}
                </chakra.h3>
              </HStack>

              <VStack alignItems={"start"} spacing={"20px"}>
                <Text
                  mb={6}
                  fontSize={["14px", "14px", "15px", "15px", "15px", "15px"]}
                  color="#2C2B2B"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                  fontFamily={"Poppins"}
                  maxW={"70%"}
                >
                  We can tell a lot about us, but actually we are more curious
                  about you
                </Text>

                <MotionButton
                  py={"25px"}
                  px={"25px"}
                  backgroundColor={"#D74848"}
                  border="1px"
                  // style={{
                  //   boxShadow: `0px 0px 30px #D74848`,
                  // }}
                  borderColor="#D74848"
                  _focus={{ borderColor: "#D74848" }}
                  _focusWithin={{
                    backgroundColor: "#D74848",
                    borderColor: "#D74848",
                  }}
                  _hover={{
                    backgroundColor: "#D74848",
                    borderColor: "#D74848",
                  }}
                  borderRadius={10}
                  whileTap={{
                    scale: 1,
                  }}
                  whileHover={{
                    scale: 1.1,
                  }}
                  onClick={() => {}}
                >
                  <Text
                    fontSize={["12px", "12px", "12px", "12px", "15px", "15px"]}
                    color={"white"}
                    pl={"10px"}
                  >
                    About Us
                  </Text>
                </MotionButton>
              </VStack>
            </VStack>

            <SimpleGrid
              mt={["80px", "0", "0", "0", "0", "0"]}
              alignItems={"start"}
              justifyItems={"start"}
              spacingX={"80px"}
              spacingY={"50px"}
              ml={["0", "20px", "20px", "20px", "20px", "100px"]}
              columns={[1, 1, 1, 1, 2, 2]}
            >
              {dummyData.map((entry, index) => (
                <CharacteristicContainer data={dummyData} dataIndex={index} />
              ))}
            </SimpleGrid>
          </Flex>
        </Box>
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
        <NextLevel />
        <OurService />
        <Growth />
        <Characteristic />
      </Box>
    </MotionFlex>
  );
}
