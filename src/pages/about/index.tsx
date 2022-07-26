import { NextPage } from "next";
import { Flex, useMediaQuery } from "@chakra-ui/react";
import Navigator from "components/navigator";
import About from "components/about";

const AboutPage: NextPage = () => {
  const [isPhone] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex
      direction="column"
      bg="green.500"
      color="black"
      minH="100vh"
      w="100%"
      justifyContent={isPhone ? "center" : "initial"}
      alignItems="center"
    >
      <Navigator />
      <About />
    </Flex>
  );
};
export default AboutPage;
