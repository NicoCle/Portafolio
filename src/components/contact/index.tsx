import { FunctionComponent } from "react";
import {
  Flex,
  Heading,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  FormControl,
  FormLabel,
  useMediaQuery,
  Textarea,
} from "@chakra-ui/react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { Form, Field } from "react-final-form";
import { logoVariants } from "../navigator/animation";
import { motion } from "framer-motion";
import useSendMail from "hook/useSendMail";

const Contact: FunctionComponent = () => {
  const { handleSend, response } = useSendMail();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isPhone] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex>
      {isPhone ? (
        <Button
          onClick={onOpen}
          variant="unstyled"
          alignItems="center"
          display="flex"
          gap="0.1rem"
        >
          <BiMessageSquareDetail />
          <Heading fontSize="lg" fontWeight="normal">
            Contact
          </Heading>
        </Button>
      ) : (
        <Button
          variant="unstyled"
          size="md"
          alignItems="center"
          display="flex"
          onClick={onOpen}
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
            Con
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
            tact
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
      )}

      <Drawer isOpen={isOpen} placement="right" size="md" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="orange.300">
          <DrawerCloseButton />
          <DrawerHeader>
            <Heading fontSize="2xl" color="orange.600">
              Chat Me
            </Heading>
          </DrawerHeader>

          <DrawerBody>
            <Form
              onSubmit={(values: TMailForm) => {
                handleSend({ ...values });
              }}
              render={({ handleSubmit }) => (
                <Flex
                  as="form"
                  flexDirection="column"
                  autoComplete="off"
                  onSubmit={handleSubmit}
                >
                  <Field name="email">
                    {({ input }) => (
                      <FormControl isRequired>
                        <FormLabel>Email</FormLabel>

                        <Input {...input} borderColor="black" type="email" />
                      </FormControl>
                    )}
                  </Field>
                  <Field name="name">
                    {({ input }) => (
                      <FormControl isRequired>
                        <FormLabel>Name</FormLabel>

                        <Input {...input} borderColor="black" type="text" />
                      </FormControl>
                    )}
                  </Field>
                  <Field name="message">
                    {({ input }) => (
                      <FormControl isRequired>
                        <FormLabel>Message</FormLabel>

                        <Textarea {...input} borderColor="black" />
                      </FormControl>
                    )}
                  </Field>
                  <FormControl h="20%">
                    <Button
                      minW="8rem"
                      bg="green.400"
                      color="black"
                      type="submit"
                      marginTop="1rem"
                    >
                      Submit
                    </Button>
                  </FormControl>
                  <Heading color="green">{response?.text}</Heading>
                </Flex>
              )}
            />
          </DrawerBody>

          <DrawerFooter>
            <Flex>
              <Button
                variant="unstyled"
                as="a"
                target="_blank"
                href="https://linkedin.com/in/nicolas-coronel-le/"
              >
                <AiFillLinkedin size="2rem" color="black" />
              </Button>
              <Button
                variant="unstyled"
                as="a"
                target="_blank"
                href="https://github.com/NicoCle"
              >
                <AiFillGithub size="2rem" color="black" />
              </Button>
              <Button
                variant="unstyled"
                as="a"
                target="_blank"
                href="https://twitter.com/NicoCoronelle"
              >
                <AiFillTwitterCircle size="2rem" color="black" />
              </Button>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
export default Contact;
