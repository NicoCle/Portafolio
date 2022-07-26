import { NextPage } from "next";
import { Flex } from "@chakra-ui/react";
import Navigator from "components/navigator";
import Overview from "components/home";

const HomePage: NextPage = () => {
  return (
    <Flex
      direction="column"
      bg="pink.900"
      minH="100vh"
      w="100%"
      color="white"
      alignItems="center"
    >
      <Navigator />
      <Overview />
    </Flex>
  );
};
export default HomePage;
