import { FunctionComponent, useState } from "react";
import {
  Flex,
  Heading,
  Button,
  CloseButton,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import PopupMessage from "components/popup";

const Home: FunctionComponent = () => {
  const [open, setOpen] = useState(false);
  const [isPhone] = useMediaQuery("(max-width: 768px)");
  const [isRotate] = useMediaQuery("(max-height: 620px)");

  const handleOpen = () => setOpen((prev) => !prev);

  return (
    <Flex h="100vh" direction="column" justifyContent="center">
      <Flex direction="column" alignItems="center">
        <Heading
          fontSize={isPhone ? "2xl" : "3xl"}
          fontWeight="normal"
          color="green.500"
          as={motion.h2}
          exit={{ opacity: 0 }}
        >
          Hi, my name is
        </Heading>
        <Heading
          fontSize={isPhone ? "4xl" : "8xl"}
          fontWeight="medium"
          color="orange.700"
          as={motion.h2}
          animate={{ opacity: [0, 1, 1, 1] }}
          exit={{ opacity: 0 }}
        >
          Nicolás Coronel
        </Heading>
        <Heading
          fontWeight="normal"
          fontSize={isPhone ? "3xl" : "4xl"}
          textAlign="center"
          color="gray"
          as={motion.h2}
          animate={{ opacity: [0, 0, 1, 1] }}
          exit={{ opacity: 0 }}
        >
          I am a Front-End developer.
        </Heading>
        <Heading
          fontSize={isPhone ? "lg" : "2xl"}
          maxW={isPhone ? "20rem" : "40rem"}
          color="black"
          padding="1rem 0 2rem"
          textAlign="center"
          as={motion.h2}
          animate={{ opacity: [0, 0, 0, 1] }}
          exit={{ opacity: 0 }}
        >
          I'm a Front-End Developer who specializes in creating web pages.
          Currently, I work with technologies like ReactJS, NextJS, ChakraUI,
          etc.
        </Heading>
        <Button
          variant="outline"
          colorScheme="pink"
          size="lg"
          w="14rem"
          onClick={handleOpen}
          as={motion.button}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 0, 0, 0, 1] }}
          exit={{ opacity: 0 }}
        >
          Get In Touch
        </Button>

        <AnimatePresence exitBeforeEnter>
          {open ? (
            <Flex
              maxH={isRotate ? "320px" : "md"}
              maxW="320px"
              boxSize="md"
              borderRadius="0.55rem"
              position="absolute"
              zIndex="20"
              bg="orange"
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, height: [50, 500] }}
              exit={{ height: [500, 50], opacity: [1, 1, 1, 0] }}
            >
              <PopupMessage />
              <CloseButton
                onClick={handleOpen}
                colorScheme="pink"
                position="absolute"
                right="1"
                top="1"
              />
            </Flex>
          ) : null}
        </AnimatePresence>
      </Flex>
    </Flex>
  );
};

export default Home;
