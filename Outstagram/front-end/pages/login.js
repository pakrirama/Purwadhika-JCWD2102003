import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  Link,
  FormControl,
  Input,
  FormLabel,
  Checkbox,
  Show,
} from "@chakra-ui/react";

export default function SplitScreen() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Show above="sm">
        <Flex
          flex={1}
          alignItems="center"
          justifyContent={{ xl: "end", sm: "center" }}
        >
          <Image
            alt={"Login Image"}
            src={"/outstagram.png"}
            height={"60vh"}
            minWidth="96"
          />
        </Flex>
      </Show>
      <Flex flex={1} justifyContent={"center"} alignItems="center">
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Box
            rounded={"lg"}
            // bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack align={"center"} pb={12} px={6}>
              <Image alt={"Login Image"} src={"/text_logo.png"} width={200} />
              <Heading
                fontSize={{ xl: "2xl", md: "xl" }}
                pb={6}
                textAlign="center"
              >
                Sign in to your account
              </Heading>
              <Text
                fontSize={{ xl: "xl", md: "sm" }}
                color={"gray.600"}
                textAlign="center"
              >
                to enjoy all of our cool{" "}
                <Link color={"blue.400"}>features</Link> ✌️
              </Text>
            </Stack>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Stack>
  );
}
