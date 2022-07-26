import { FunctionComponent } from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const PopupMessage: FunctionComponent = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      direction="column"
      padding="3rem"
      alignItems="center"
      justifyContent="space-around"
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0, 0, 1] }}
      exit={{ opacity: 0 }}
    >
      <AnimatePresence exitBeforeEnter>
        <Flex direction="column">
          <Button
            variant="unstyled"
            as="a"
            target="_blank"
            textAlign="center"
            href="https://linkedin.com/in/nicolas-coronel-le/"
          >
            <AiFillLinkedin size="md" color="black" />
            <Text>LinkedIn</Text>
          </Button>
        </Flex>
        <Flex direction="column">
          <Button
            variant="unstyled"
            as="a"
            target="_blank"
            textAlign="center"
            href="https://github.com/NicoCle"
          >
            <AiFillGithub size="md" color="black" />
            <Text>GitHub</Text>
          </Button>
        </Flex>
        <Flex direction="column">
          <Button
            variant="unstyled"
            as="a"
            target="_blank"
            textAlign="center"
            href="https://twitter.com/NicoCoronelle"
          >
            <AiFillTwitterCircle size="md" color="black" />
            <Text>Twitter</Text>
          </Button>
        </Flex>
      </AnimatePresence>
    </Flex>
  );
};
export default PopupMessage;
