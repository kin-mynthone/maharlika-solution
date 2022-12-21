import { Flex, SimpleGrid, HStack, Text, Box, VStack } from "@chakra-ui/react";
import { Link } from "react-scroll/modules";

import Image from "next/image";
import { useWindowSize } from "../../../custom_hooks";
import { MotionButton, MotionFlex } from "/constants/components/motion";
import { msloading, bank, brain, agreement, mslogo1 } from "/constants/data";
import { FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import { chakra } from "@chakra-ui/react";
import Router from "next/router";

export default function Footer() {
  const { height, width } = useWindowSize();

  return (
    <Flex
      w={"full"}
      bg="#303030"
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      position={"relative"}
    >
      <Flex
        flexDir={"column"}
        py={["10%", "3%", "3%", "3%", "3%", "3%"]}
        px={["7%", "3%", "3%", "3%", "7%", "5%"]}
        alignItems={"start"}
        justifyContent={"space-around"}
        width={[width, width - 14, width - 14, width - 14, width, width - 14]}
        bgColor={"#16365F"}
      >
        <VStack alignItems={"start"} spacing={"50px"}>
          <Box
            height={["30px", "45px", "45px", "45px", "45px", "45px"]}
            width={["100px", "120px", "120px", "120px", "150px", "150px"]}
          >
            <Image src={mslogo1} draggable="false" alt="ms icon png" />
          </Box>
          <VStack alignItems={"start"} spacing={"10px"}>
            <chakra.h3
              fontFamily={"Poppins.black"}
              fontSize={["15px", "18px", "18px", "18px", "18px", "18px"]}
              fontWeight="black"
              letterSpacing={{
                base: "normal",
                md: "normal",
              }}
              color="#D64747"
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
            >
              {`Why we do what we are doing?`}
            </chakra.h3>

            <SimpleGrid
              alignItems={"start"}
              alignSelf={"center"}
              justifyItems={"start"}
              spacingX={"80px"}
              spacingY={"30px"}
              columns={[1, 1, 1, 1, 2, 2]}
            >
              <chakra.p
                fontSize={["12px", "14px", "15px", "15px", "12px", "12px"]}
                color="rgba(255, 255, 255, 0.8) "
                whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                fontFamily={"Poppins"}
              >
                {`We do not see ourselves as a marketing agency, a software company, sales agency, graphic designer or IT company. Even though we offer a combination of services that are also being provided by the business mentioned above. We consider ourselves more a “Growth Hacker,” because our services are focused on achieving growth.`}
              </chakra.p>

              <chakra.p
                fontSize={["12px", "14px", "15px", "15px", "12px", "12px"]}
                color="rgba(255, 255, 255, 0.8) "
                whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                fontFamily={"Poppins"}
              >
                {`Because of our diverse knowledge and experience, we can understand the different disciplines and consider them as a whole. The most significant advantage is that we look at every business as entrepreneurs, which means that we value to maintain the vision and the mission of the organization.
`}
              </chakra.p>

              <chakra.p
                fontSize={["12px", "14px", "15px", "15px", "12px", "12px"]}
                color="rgba(255, 255, 255, 0.8) "
                whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                fontFamily={"Poppins"}
              >
                {`A secret recipe for success doesn’t exist, every business is different, and that is what makes our work so much fun. We learn from various organizations and are getting involved in all type of work processes. All of this enables us to respond to specific needs and provide fitted solutions
`}
              </chakra.p>

              <chakra.p
                fontSize={["12px", "14px", "15px", "15px", "12px", "12px"]}
                color="rgba(255, 255, 255, 0.8) "
                whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                fontFamily={"Poppins"}
              >
                {`We take into account that there is a distance between being optimistic and being realistic and discovered that steady growth is found in-between. Our strength is to empower others, and we do that by genuine understanding. We just connect the dots
`}
              </chakra.p>
            </SimpleGrid>
          </VStack>
          <SimpleGrid
            alignItems={"start"}
            justifyContent={"space-between"}
            spacingX={"80px"}
            spacingY={"50px"}
            w={"full"}
            columns={[1, 1, 1, 1, 2, 2]}
          >
            <VStack alignItems={"start"} spacing={"10px"}>
              <chakra.h3
                fontFamily={"Poppins.black"}
                fontSize={["15px", "18px", "18px", "18px", "18px", "18px"]}
                fontWeight="black"
                letterSpacing={{
                  base: "normal",
                  md: "normal",
                }}
                color="#D64747"
                whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
              >
                {`We are Located at`}
              </chakra.h3>
              <chakra.p
                fontSize={["12px", "14px", "15px", "15px", "12px", "12px"]}
                color="rgba(255, 255, 255, 0.8) "
                whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                fontFamily={"Poppins"}
              >
                {`Amsterdam, Netherlands`}
              </chakra.p>
            </VStack>

            <VStack alignItems={"start"} spacing={"10px"} id={"contact_us"}>
              <chakra.h3
                fontFamily={"Poppins.black"}
                fontSize={["15px", "18px", "18px", "18px", "18px", "18px"]}
                fontWeight="black"
                letterSpacing={{
                  base: "normal",
                  md: "normal",
                }}
                color="#D64747"
                whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
              >
                {`You can reach us `}
              </chakra.h3>
              <chakra.p
                fontSize={["12px", "14px", "15px", "15px", "12px", "12px"]}
                color="rgba(255, 255, 255, 0.8) "
                whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                fontFamily={"Poppins"}
              >
                {`Email: info@onemaharlika.com
`}
              </chakra.p>
              <chakra.p
                fontSize={["12px", "14px", "15px", "15px", "12px", "12px"]}
                color="rgba(255, 255, 255, 0.8) "
                whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                fontFamily={"Poppins"}
              >
                {`Mobile: +31 (0)85 022 09 99
`}
              </chakra.p>
            </VStack>
          </SimpleGrid>

          <Flex
            w={"full"}
            flexDir={["column", "column", "row", "row", "row", "row"]}
            alignItems={"start"}
            alignSelf={"start"}
            pt={"60px"}
            justifyContent={"space-between"}
            spacingY={"20px"}
          >
            <SimpleGrid
              alignItems={"start"}
              alignSelf={"start"}
              justifyItems={"start"}
              spacingX={"100px"}
              spacingY={"40px"}
              columns={[1, 1, 3, 3, 3, 3]}
            >
              <VStack alignItems={"start"}>
                <Text
                  color={"white"}
                  fontSize={["14px", "142px", "15px", "15px", "15px", "15px"]}
                  fontWeight={"black"}
                >
                  Services
                </Text>
                <SimpleGrid
                  pt={"10px"}
                  alignItems={"start"}
                  alignSelf={"start"}
                  justifyItems={"start"}
                  spacingX={"20px"}
                  spacingY={"20px"}
                  columns={1}
                >
                  <Text
                    as={"button"}
                    color="rgba(255, 255, 255, 0.8) "
                    fontSize={["12px", "12px", "13px", "13px", "13px", "13px"]}
                    fontWeight={"thin"}
                    onClick={() => {
                      Router.push({
                        pathname: "/services/commercial",
                      });
                    }}
                  >
                    Commercial
                  </Text>
                  <Text
                    as={"button"}
                    color="rgba(255, 255, 255, 0.8) "
                    fontSize={["12px", "12px", "13px", "13px", "13px", "13px"]}
                    fontWeight={"thin"}
                    onClick={() => {
                      Router.push({
                        pathname: "/services/technical",
                      });
                    }}
                  >
                    Technical
                  </Text>
                  <Text
                    as={"button"}
                    color="rgba(255, 255, 255, 0.8) "
                    fontSize={["12px", "12px", "13px", "13px", "13px", "13px"]}
                    fontWeight={"thin"}
                    onClick={() => {
                      Router.push({
                        pathname: "/services/creative",
                      });
                    }}
                  >
                    Creative
                  </Text>
                </SimpleGrid>
              </VStack>
              {/* <VStack alignItems={"start"}>
                <Text
                  as={"button"}
                  color={"white"}
                  fontSize={["14px", "142px", "15px", "15px", "15px", "15px"]}
                  fontWeight={"black"}
                >
                  Tools
                </Text>
                <SimpleGrid
                  pt={"10px"}
                  alignItems={"start"}
                  alignSelf={"start"}
                  justifyItems={"start"}
                  spacingX={"20px"}
                  spacingY={"20px"}
                  columns={1}
                >
                  <Text
                    as={"button"}
                    color="rgba(255, 255, 255, 0.8) "
                    fontSize={["12px", "12px", "13px", "13px", "13px", "13px"]}
                    fontWeight={"thin"}
                  >
                    Development
                  </Text>
                  <Text
                    as={"button"}
                    color="rgba(255, 255, 255, 0.8) "
                    fontSize={["12px", "12px", "13px", "13px", "13px", "13px"]}
                    fontWeight={"thin"}
                  >
                    Designs
                  </Text>
                </SimpleGrid>
              </VStack> */}
              <VStack alignItems={"start"}>
                <Text
                  color={"white"}
                  fontSize={["14px", "142px", "15px", "15px", "15px", "15px"]}
                  fontWeight={"black"}
                >
                  Careers
                </Text>
                <SimpleGrid
                  pt={"10px"}
                  alignItems={"start"}
                  alignSelf={"start"}
                  justifyItems={"start"}
                  spacingX={"20px"}
                  spacingY={"20px"}
                  columns={1}
                >
                  <Text
                    as={"button"}
                    color="rgba(255, 255, 255, 0.8) "
                    fontSize={["12px", "12px", "13px", "13px", "13px", "13px"]}
                    fontWeight={"thin"}
                    onClick={() => {
                      Router.push({
                        pathname: "/careers",
                      });
                    }}
                  >
                    Technical Jobs
                  </Text>
                  <Text
                    as={"button"}
                    color="rgba(255, 255, 255, 0.8) "
                    fontSize={["12px", "12px", "13px", "13px", "13px", "13px"]}
                    fontWeight={"thin"}
                    onClick={() => {
                      Router.push({
                        pathname: "/careers",
                      });
                    }}
                  >
                    Creative Jobs
                  </Text>
                  <Text
                    as={"button"}
                    color="rgba(255, 255, 255, 0.8) "
                    fontSize={["12px", "12px", "13px", "13px", "13px", "13px"]}
                    fontWeight={"thin"}
                    onClick={() => {
                      Router.push({
                        pathname: "/careers",
                      });
                    }}
                  >
                    Admin
                  </Text>
                </SimpleGrid>
              </VStack>
            </SimpleGrid>

            <SimpleGrid
              pt={{
                base: "50px",
                sm: "0",
              }}
              alignItems={"start"}
              alignSelf={"start"}
              justifyItems={"start"}
              spacingX={"50px"}
              spacingY={"40px"}
              w={"47.5%"}
              columns={[1, 1, 1, 1, 2, 2]}
            >
              <VStack spacing={1} alignItems={"start"}>
                <Text
                  fontSize={["14px", "142px", "15px", "15px", "15px", "15px"]}
                  color={"white"}
                  fontWeight={"black"}
                  marginRight={"5"}
                  whiteSpace={["normal", "normal", "normal", "normal"]}
                >
                  Follow us
                </Text>

                <HStack spacing={10} pt={"10px"}>
                  <MotionButton
                    size="xxs"
                    width={["20px", "30px", "30px", "30px", "30px", "30px"]}
                    height={["20px", "30px", "30px", "30px", "30px", "30px"]}
                    backgroundColor={"transparent"}
                    borderColor="transparent"
                    _focus={{ borderColor: "transparent" }}
                    _focusWithin={{
                      backgroundColor: "transparent",
                      borderColor: "transparent",
                    }}
                    _hover={{
                      backgroundColor: "transparent",
                      borderColor: "transparent",
                    }}
                    borderRadius={8}
                    whileTap={{
                      scale: 1,
                    }}
                    whileHover={{
                      scale: 1.1,
                    }}
                    onClick={() => {}}
                  >
                    <AiFillFacebook
                      size={["20px", "30px", "30px", "30px", "30px", "30px"]}
                      color={"rgba(215, 72, 72, 0.7)"}
                    />
                  </MotionButton>
                  <MotionButton
                    size="xxs"
                    width={["20px", "30px", "30px", "30px", "30px", "30px"]}
                    height={["20px", "30px", "30px", "30px", "30px", "30px"]}
                    backgroundColor={"transparent"}
                    borderColor="transparent"
                    _focus={{ borderColor: "transparent" }}
                    _focusWithin={{
                      backgroundColor: "transparent",
                      borderColor: "transparent",
                    }}
                    _hover={{
                      backgroundColor: "transparent",
                      borderColor: "transparent",
                    }}
                    borderRadius={8}
                    whileTap={{
                      scale: 1,
                    }}
                    whileHover={{
                      scale: 1.1,
                    }}
                    onClick={() => {}}
                  >
                    <FaTwitter
                      size={["20px", "30px", "30px", "30px", "30px", "30px"]}
                      color={"rgba(215, 72, 72, 0.7)"}
                    />
                  </MotionButton>
                  <MotionButton
                    size="xxs"
                    width={["20px", "30px", "30px", "30px", "30px", "30px"]}
                    height={["20px", "30px", "30px", "30px", "30px", "30px"]}
                    backgroundColor={"transparent"}
                    borderColor="transparent"
                    _focus={{ borderColor: "transparent" }}
                    _focusWithin={{
                      backgroundColor: "transparent",
                      borderColor: "transparent",
                    }}
                    _hover={{
                      backgroundColor: "transparent",
                      borderColor: "transparent",
                    }}
                    borderRadius={8}
                    whileTap={{
                      scale: 1,
                    }}
                    whileHover={{
                      scale: 1.1,
                    }}
                    onClick={() => {}}
                  >
                    <AiFillInstagram
                      size={["20px", "30px", "30px", "30px", "30px", "30px"]}
                      color={"rgba(215, 72, 72, 0.7)"}
                    />
                  </MotionButton>
                  <MotionButton
                    size="xxs"
                    width={["20px", "30px", "30px", "30px", "30px", "30px"]}
                    height={["20px", "30px", "30px", "30px", "30px", "30px"]}
                    backgroundColor={"transparent"}
                    borderColor="transparent"
                    _focus={{ borderColor: "transparent" }}
                    _focusWithin={{
                      backgroundColor: "transparent",
                      borderColor: "transparent",
                    }}
                    _hover={{
                      backgroundColor: "transparent",
                      borderColor: "transparent",
                    }}
                    borderRadius={8}
                    whileTap={{
                      scale: 1,
                    }}
                    whileHover={{
                      scale: 1.1,
                    }}
                    onClick={() => {}}
                  >
                    <FaLinkedinIn
                      size={["10px", "30px", "30px", "30px", "30px", "30px"]}
                      color={"rgba(215, 72, 72, 0.7)"}
                    />
                  </MotionButton>
                  <MotionButton
                    size="xxs"
                    width={["20px", "30px", "30px", "30px", "30px", "30px"]}
                    height={["20px", "30px", "30px", "30px", "30px", "30px"]}
                    backgroundColor={"transparent"}
                    borderColor="transparent"
                    _focus={{ borderColor: "transparent" }}
                    _focusWithin={{
                      backgroundColor: "transparent",
                      borderColor: "transparent",
                    }}
                    _hover={{
                      backgroundColor: "transparent",
                      borderColor: "transparent",
                    }}
                    borderRadius={8}
                    whileTap={{
                      scale: 1,
                    }}
                    whileHover={{
                      scale: 1.1,
                    }}
                    onClick={() => {}}
                  >
                    <FaYoutube
                      size={["20px", "30px", "30px", "30px", "30px", "30px"]}
                      color={"rgba(215, 72, 72, 0.7)"}
                    />
                  </MotionButton>
                </HStack>
              </VStack>
              {/* <VStack spacing={1} alignItems={"start"}>
                <Text
                  pb={"10px"}
                  fontSize={["14px", "142px", "15px", "15px", "15px", "15px"]}
                  color={"white"}
                  fontWeight={"black"}
                  marginRight={"5"}
                >
                  Keep Updated
                </Text>
                <MotionButton
                  whileTap={{
                    scale: 0.9,
                  }}
                  whileHover={{
                    scale: 1.1,
                  }}
                  width={"180px"}
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
                  <Text
                    fontSize="14px"
                    color={"white"}
                    whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                  >
                    Read More
                  </Text>
                  <BsArrowRightShort size={"30px"} color={"white"} />
                </MotionButton>
              </VStack> */}
            </SimpleGrid>
          </Flex>
        </VStack>
      </Flex>

      <chakra.p
        fontSize={["10px", "10px", "10px", "10px", "12px", "12px"]}
        color="rgba(255, 255, 255, 0.8) "
        alignSelf={{
          base: "center",
          sm: "end",
        }}
        mr={{
          base: "0",
          sm: "100px",
        }}
        fontFamily={"Poppins"}
        py={{
          base: "10px",
          sm: "10px",
        }}
      >
        © 2022 maharlika Solutions, All Rights Reserved.
      </chakra.p>
    </Flex>
  );
}
