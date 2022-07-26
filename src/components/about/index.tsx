import { FunctionComponent } from "react";
import {
  Flex,
  Heading,
  Divider,
  useMediaQuery,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AiFillCheckCircle } from "react-icons/ai";

const About: FunctionComponent = () => {
  const [isPhone] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex
      w="90%"
      direction={isPhone ? "column" : "row"}
      h={isPhone ? "100%" : "100vh"}
      alignItems="center"
      justifyContent="center"
      gap="1rem"
      position="relative"
      padding="3rem"
      color="black"
    >
      <Flex
        direction="column"
        boxShadow="2xl"
        maxW="320px"
        padding="1rem"
        boxSize="md"
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          height: [100, 300],
        }}
        exit={{ height: [300, 50], opacity: 0 }}
      >
        <Heading
          fontSize={isPhone ? "lg" : "3xl"}
          fontWeight={isPhone ? "normal" : "bold"}
        >
          Proyects
        </Heading>
        <Divider />
        <Heading
          fontWeight="normal"
          maxW="60rem"
          color="green.900"
          fontSize={isPhone ? "lg" : "3xl"}
        >
          Coming soon...
        </Heading>
      </Flex>
      <Flex
        boxShadow="2xl"
        padding="1rem"
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          height: [50, 250],
        }}
        exit={{ height: [250, 50], opacity: 0 }}
      >
        <List
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0, 0, 1],
          }}
        >
          <Heading fontSize="2xl">Technologies that I have learned: </Heading>
          <ListItem>
            <ListIcon as={AiFillCheckCircle} color="black" />
            Next Js
          </ListItem>
          <ListItem>
            <ListIcon as={AiFillCheckCircle} color="black" />
            React Js
          </ListItem>
          <ListItem>
            <ListIcon as={AiFillCheckCircle} color="black" />
            TypeScript
          </ListItem>
          <ListItem>
            <ListIcon as={AiFillCheckCircle} color="black" />
            HTML
          </ListItem>
          <ListItem>
            <ListIcon as={AiFillCheckCircle} color="black" />
            CSS
          </ListItem>
          <ListItem>
            <ListIcon as={AiFillCheckCircle} color="black" />
            JavaScript
          </ListItem>
          <ListItem>
            <ListIcon as={AiFillCheckCircle} color="black" />
            Solidity
          </ListItem>
        </List>
      </Flex>
    </Flex>
  );
};

export default About;
