import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "styles/theme.styles.global";
import { AnimatePresence } from "framer-motion";

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ChakraProvider>
  );
};
export default MyApp;
