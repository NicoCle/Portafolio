import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import {
  Flex,
  Button,
  Heading,
  useMediaQuery,
  Menu,
  MenuButton,
  MenuList,
  IconButton,
} from "@chakra-ui/react";

import { BiHome, BiUser } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { logoVariants } from "./animation";
import Link from "next/link";
import Contact from "components/contact";

const Navigator: FunctionComponent = () => {
  const [isPhone] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex
      position="fixed"
      top="0rem"
      w="100%"
      bg="transparent"
      h="4.5rem"
      justifyContent="space-between"
      alignItems="center"
      padding="2rem"
      zIndex="10"
    >
      <Flex>
        <Heading
          fontSize="3xl"
          as={motion.h1}
          key="M"
          variants={logoVariants}
          animate="visibleKeyM"
          initial="hiddenKeyM"
          exit="exitKeyM"
        >
          M
        </Heading>
        <Heading
          fontSize="3xl"
          as={motion.h1}
          key="E"
          variants={logoVariants}
          animate="visibleKeyE"
          initial="hiddenKeyE"
          exit="exitKeyE"
        >
          E
        </Heading>
        <Heading
          fontSize="3xl"
          as={motion.h1}
          key="Parenthesis"
          variants={logoVariants}
          animate="visibleKeyParenthesis"
          initial="hiddenKeyParenthesis"
          exit="exitKeyParenthesis"
        >
          ( )
        </Heading>
      </Flex>
      {isPhone ? (
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<AiOutlineMenu />}
            variant="outline"
          />
          <MenuList bg="pink.200" p="1rem 2rem" color="pink.900">
            <Link href="/home">
              <Button
                variant="unstyled"
                size="md"
                alignItems="center"
                display="flex"
              >
                <BiHome size="1.2rem" />
                <Heading fontWeight="normal" fontSize="lg">
                  Home
                </Heading>
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="unstyled"
                size="md"
                alignItems="center"
                display="flex"
              >
                <BiUser size="1.2rem" />
                <Heading fontWeight="normal" fontSize="lg">
                  About
                </Heading>
              </Button>
            </Link>
            <Contact />
          </MenuList>
        </Menu>
      ) : (
        <Flex gap="3rem">
          <Link href="/home">
            <Button
              variant="unstyled"
              size="md"
              alignItems="center"
              display="flex"
            >
              <Heading
                fontSize="2xl"
                fontWeight="normal"
                as={motion.h1}
                variants={logoVariants}
                initial="hiddenKeyM"
                animate="visibleKeyM"
                exit="exitKeyM"
              >
                Ho
              </Heading>
              <Heading
                fontSize="2xl"
                fontWeight="normal"
                as={motion.h1}
                variants={logoVariants}
                initial="hiddenKeyE"
                animate="visibleKeyE"
                exit="exitKeyE"
              >
                me
              </Heading>
              <Heading
                fontSize="2xl"
                color="green.400"
                as={motion.h1}
                variants={logoVariants}
                initial="hiddenKeyParenthesis"
                animate="visibleKeyParenthesis"
                exit="exitKeyParenthesis"
              >
                ( )
              </Heading>
            </Button>
          </Link>
          <Link href="/about">
            <Button
              variant="unstyled"
              size="md"
              alignItems="center"
              display="flex"
            >
              <Heading
                fontSize="2xl"
                fontWeight="normal"
                as={motion.h1}
                variants={logoVariants}
                initial="hiddenKeyM"
                animate="visibleKeyM"
                exit="exitKeyM"
              >
                Ab
              </Heading>
              <Heading
                fontSize="2xl"
                fontWeight="normal"
                as={motion.h1}
                variants={logoVariants}
                initial="hiddenKeyE"
                animate="visibleKeyE"
                exit="exitKeyE"
              >
                out
              </Heading>
              <Heading
                fontSize="2xl"
                color="green.400"
                as={motion.h1}
                variants={logoVariants}
                initial="hiddenKeyParenthesis"
                animate="visibleKeyParenthesis"
                exit="exitKeyParenthesis"
              >
                ( )
              </Heading>
            </Button>
          </Link>
          <Contact />

          <Button
            colorScheme="orange"
            as="a"
            target="_blank"
            href="https://drive.google.com/file/d/1vHdnhwW3g7BWsWtoaJsD4A6K_iDdyy4S/view?usp=sharing"
          >
            Abstract
          </Button>
        </Flex>
      )}
    </Flex>
  );
};
export default Navigator;
