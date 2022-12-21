import {
  Box,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  useColorMode,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
  Spacer,
} from "@chakra-ui/react";
import { MotionButton } from "../../components/motion";
import React from "react";
import Router from "next/router";
import Image from "next/image";
import { HiMoon, HiSun } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import { chakra } from "@chakra-ui/react";
import { default as NextLink } from "next/link";
import { mslogo } from "../../../constants/data";
import { pagesStore } from "../../../store/pages";
import { Link } from "react-scroll/modules";
import "@fontsource/poppins";
import { useWindowSize } from "../../../custom_hooks";

import { IoIosRocket } from "react-icons/io";

export default function NavigationBar() {
  const mobileNav = useDisclosure();
  const cl = useColorModeValue("#474747", "#D74848");
  const mode = useColorModeValue("#474747", "#CDCDCD");
  const { toggleColorMode: toggleMode } = useColorMode();
  const SwitchIcon = useColorModeValue(HiMoon, HiSun);
  const klogoMode = useColorModeValue(mslogo, mslogo);
  const { height, width } = useWindowSize();

  const ref = React.useRef(null);

  const setPageIndex = pagesStore((state) => state.set_page_index);
  const getPageIndex = pagesStore((state) => state.page_index);

  const bg = useColorModeValue("white", "#474747");
  const MobileNavContent = (
    <VStack
      zIndex={10}
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={5}
      bg={bg}
      spacing={3}
      borderRadius={"20px"}
      shadow="lg"
    >
      <MotionButton
        backgroundColor={"transparent"}
        _focus={{ border: "none" }}
        _focusWithin={{ backgroundColor: "transparent" }}
        _hover={{
          backgroundColor: "transparent",
          cursor: "pointer",
        }}
        flexDirection={"row"}
        whileTap={{
          scale: 0.9,
        }}
        whileHover={{
          scale: 1.1,
          color: cl,
        }}
        onClick={() => {
          Router.push({
            pathname: "/home",
          });
        }}
      >
        <Text
          fontWeight={getPageIndex == 1 ? "black" : "thin"}
          fontSize="14px"
          color={getPageIndex == 1 ? "#D74848" : "#474747"}
          _dark={{
            color: getPageIndex == 1 ? "#D74848" : "gray",
          }}
          _hover={{
            color: "#D74848",
          }}
        >
          Home
        </Text>
      </MotionButton>
      <MotionButton
        backgroundColor={"transparent"}
        _focus={{ border: "none" }}
        _focusWithin={{ backgroundColor: "transparent" }}
        _hover={{
          backgroundColor: "transparent",
          cursor: "pointer",
        }}
        flexDirection={"row"}
        whileTap={{
          scale: 0.9,
        }}
        whileHover={{
          scale: 1.1,
          color: cl,
        }}
        onClick={() => {
          Router.push({
            pathname: "/services",
          });
        }}
      >
        <Text
          fontWeight={getPageIndex == 1 ? "black" : "thin"}
          fontSize="14px"
          color={getPageIndex == 1 ? "#D74848" : "#474747"}
          _dark={{
            color: getPageIndex == 1 ? "#D74848" : "gray",
          }}
          _hover={{
            color: "#D74848",
          }}
        >
          Services
        </Text>
      </MotionButton>
      {/* <MotionButton
        backgroundColor={"transparent"}
        _focus={{ border: "none" }}
        _focusWithin={{ backgroundColor: "transparent" }}
        _hover={{
          backgroundColor: "transparent",
          cursor: "pointer",
        }}
        flexDirection={"row"}
        whileTap={{
          scale: 0.9,
        }}
        whileHover={{
          scale: 1.1,
          color: cl,
        }}
        onClick={() => {
          Router.push({
            pathname: "/tools",
          });
        }}
      >
        <Text
          fontWeight={getPageIndex == 1 ? "black" : "thin"}
          fontSize="14px"
          color={getPageIndex == 1 ? "#D74848" : "#474747"}
          _dark={{
            color: getPageIndex == 1 ? "#D74848" : "gray",
          }}
          _hover={{
            color: "#D74848",
          }}
        >
          Tools
        </Text>
      </MotionButton> */}
      <MotionButton
        backgroundColor={"transparent"}
        _focus={{ border: "none" }}
        _focusWithin={{ backgroundColor: "transparent" }}
        _hover={{
          backgroundColor: "transparent",
          cursor: "pointer",
        }}
        flexDirection={"row"}
        whileTap={{
          scale: 0.9,
        }}
        whileHover={{
          scale: 1.1,
          color: cl,
        }}
        onClick={() => {
          Router.push({
            pathname: "/careers",
          });
        }}
      >
        <Text
          fontWeight={getPageIndex == 1 ? "black" : "thin"}
          fontSize="14px"
          color={getPageIndex == 1 ? "#D74848" : "#474747"}
          _dark={{
            color: getPageIndex == 1 ? "#D74848" : "gray",
          }}
          _hover={{
            color: "#D74848",
          }}
        >
          Careers
        </Text>
      </MotionButton>
      <Link
        activeClass="active"
        to="contact_us"
        spy={true}
        smooth={true}
        offset={-130}
        duration={1000}
      >
        <MotionButton
          backgroundColor={"transparent"}
          _focus={{ border: "none" }}
          _focusWithin={{ backgroundColor: "transparent" }}
          _hover={{
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
          flexDirection={"row"}
          whileTap={{
            scale: 0.9,
          }}
          whileHover={{
            scale: 1.1,
            color: cl,
          }}
          // onClick={() => {
          //   Router.push({
          //     pathname: "/start_your_project",
          //   });
          // }}
        >
          <Text
            fontWeight={getPageIndex == 1 ? "black" : "thin"}
            fontSize="14px"
            color={getPageIndex == 1 ? "#D74848" : "#474747"}
            _dark={{
              color: getPageIndex == 1 ? "#D74848" : "gray",
            }}
            _hover={{
              color: "#D74848",
            }}
          >
            Start your project
          </Text>
        </MotionButton>
      </Link>
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
    </VStack>
  );
  return (
    <React.Fragment>
      <Box w={"full"} h={"200px"} position={"absolute"}>
        <chakra.header
          ref={ref}
          position={"absolute"}
          right={["0px", "10px", "75px", "75px", "0px", "80px"]}
          left={["10px", "10px", "75px", "75px", "75px", "100px"]}
          padding="6"
          zIndex={2}
        >
          <Flex alignItems="center" justifyContent="space-between" mx="auto">
            <Link display="flex" alignItems="center" href="/">
              <Box
                height={["30px", "45px", "45px", "45px", "45px", "45px"]}
                width={["100px", "120px", "120px", "120px", "150px", "150px"]}
              >
                <Image
                  src={klogoMode}
                  draggable="false"
                  alt="ms icon png"
                  onClick={() => {
                    Router.push({
                      pathname: "/home",
                    });
                  }}
                />
              </Box>
            </Link>
            <Spacer />

            <HStack
              spacing="5"
              display={{
                base: "none",
                md: "flex",
              }}
            >
              <MotionButton
                backgroundColor={"transparent"}
                _focus={{ border: "none" }}
                _focusWithin={{ backgroundColor: "transparent" }}
                _hover={{
                  backgroundColor: "transparent",
                  cursor: "pointer",
                }}
                flexDirection={"row"}
                whileTap={{
                  scale: 0.9,
                }}
                whileHover={{
                  scale: 1.1,
                  color: cl,
                }}
                onClick={() => {
                  Router.push({
                    pathname: "/home",
                  });
                }}
              >
                <Text
                  fontWeight={getPageIndex == 1 ? "black" : "thin"}
                  fontSize="14px"
                  color={getPageIndex == 1 ? "#D74848" : "#474747"}
                  _dark={{
                    color: getPageIndex == 1 ? "#D74848" : "gray",
                  }}
                  _hover={{
                    color: "#D74848",
                  }}
                >
                  Home
                </Text>
              </MotionButton>
              <MotionButton
                backgroundColor={"transparent"}
                _focus={{ border: "none" }}
                _focusWithin={{ backgroundColor: "transparent" }}
                _hover={{
                  backgroundColor: "transparent",
                  cursor: "pointer",
                }}
                flexDirection={"row"}
                whileTap={{
                  scale: 0.9,
                }}
                whileHover={{
                  scale: 1.1,
                  color: cl,
                }}
                onClick={() => {
                  Router.push({
                    pathname: "/services/commercial",
                  });
                }}
              >
                <Text
                  fontWeight={getPageIndex == 1 ? "black" : "thin"}
                  fontSize="14px"
                  color={getPageIndex == 1 ? "#D74848" : "#474747"}
                  _dark={{
                    color: getPageIndex == 1 ? "#D74848" : "gray",
                  }}
                  _hover={{
                    color: "#D74848",
                  }}
                >
                  Services
                </Text>
              </MotionButton>
              {/* <MotionButton
                backgroundColor={"transparent"}
                _focus={{ border: "none" }}
                _focusWithin={{ backgroundColor: "transparent" }}
                _hover={{
                  backgroundColor: "transparent",
                  cursor: "pointer",
                }}
                flexDirection={"row"}
                whileTap={{
                  scale: 0.9,
                }}
                whileHover={{
                  scale: 1.1,
                  color: cl,
                }}
                onClick={() => {
                  Router.push({
                    pathname: "/tools",
                  });
                }}
              >
                <Text
                  fontWeight={getPageIndex == 1 ? "black" : "thin"}
                  fontSize="14px"
                  color={getPageIndex == 1 ? "#D74848" : "#474747"}
                  _dark={{
                    color: getPageIndex == 1 ? "#D74848" : "gray",
                  }}
                  _hover={{
                    color: "#D74848",
                  }}
                >
                  Tools
                </Text>
              </MotionButton> */}
              <MotionButton
                backgroundColor={"transparent"}
                _focus={{ border: "none" }}
                _focusWithin={{ backgroundColor: "transparent" }}
                _hover={{
                  backgroundColor: "transparent",
                  cursor: "pointer",
                }}
                flexDirection={"row"}
                whileTap={{
                  scale: 0.9,
                }}
                whileHover={{
                  scale: 1.1,
                  color: cl,
                }}
                onClick={() => {
                  Router.push({
                    pathname: "/careers",
                  });
                }}
              >
                <Text
                  fontWeight={getPageIndex == 1 ? "black" : "thin"}
                  fontSize="14px"
                  color={getPageIndex == 1 ? "#D74848" : "#474747"}
                  _dark={{
                    color: getPageIndex == 1 ? "#D74848" : "gray",
                  }}
                  _hover={{
                    color: "#D74848",
                  }}
                >
                  Careers
                </Text>
              </MotionButton>
              <Link
                activeClass="active"
                to="contact_us"
                spy={true}
                smooth={true}
                offset={-130}
                duration={1000}
              >
                <MotionButton
                  py={"22px"}
                  backgroundColor={"#D74848"}
                  _focus={{ border: "none" }}
                  _focusWithin={{ backgroundColor: "#D74848" }}
                  _hover={{
                    backgroundColor: "#D74848",
                    cursor: "pointer",
                  }}
                  flexDirection={"row"}
                  whileTap={{
                    scale: 0.9,
                  }}
                  whileHover={{
                    scale: 1.1,
                    color: cl,
                  }}
                  // onClick={() => {
                  //   Router.push({
                  //     pathname: "/start_your_project",
                  //   });
                  // }}
                >
                  <IoIosRocket size={"20px"} color={"white"} />

                  <Text fontSize="14px" color={"white"} pl={"10px"}>
                    Start your project
                  </Text>
                </MotionButton>
              </Link>
            </HStack>

            <Box display="flex" alignItems="center" ml={"20px"}>
              {/* <MotionButton
                backgroundColor={"transparent"}
                _focus={{ border: "none" }}
                _focusWithin={{ backgroundColor: "transparent" }}
                _hover={{
                  backgroundColor: "transparent",
                  cursor: "pointer",
                }}
                whileTap={{
                  scale: 0.9,
                }}
                whileHover={{
                  scale: 1.1,
                  color: cl,
                }}
                onClick={toggleMode} //update this
              >
                <SwitchIcon color={mode} size={"22px"} />
              </MotionButton> */}
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onToggle}
              />
            </Box>
          </Flex>

          {MobileNavContent}
        </chakra.header>
      </Box>
    </React.Fragment>
  );
}
