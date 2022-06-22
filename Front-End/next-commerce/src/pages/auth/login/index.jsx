import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  InputGroup,
  useColorModeValue,
  InputRightElement,
  FormHelperText,
} from "@chakra-ui/react";

import { useFormik } from "formik";
import axios from "axios";
import jsCookie from "js-cookie";
import * as Yup from "yup";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../../../lib/api";
import { useRouter } from "next/router";
import auth_types from "../../../Redux/Reducers/auth/types";

export default function SimpleCard() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  // const toast = useSelector();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required("email harus diisi"),
      password: Yup.string().required("password harus diisi"),
    }),
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
      try {
        const res = await axiosInstance.get("users", {
          params: {
            username: values.username,
            // password: values.password,
          },
        });
        if (!res.data.length) {
          throw new Error("user not found");
        }
        console.log(res.data[0]);
        if (res.data[0].password != values.password) {
          throw new Error("password invalid");
        }

        const userData = res.data[0];
        dispatch({
          type: auth_types.USER_LOGIN,
          payload: userData,
        });

        jsCookie.set("user_data", JSON.stringify(userData));
      } catch (error) {
        alert(error);
      }
    },
  });

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email" isInvalid={formik.errors.email}>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                onChange={(event) => {
                  formik.setFieldValue("email", event.target.value);
                }}
              />
              <FormHelperText>{formik.errors.email}</FormHelperText>
            </FormControl>
            <FormControl id="password" isInvalid={formik.errors.password}>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  onChange={(event) => {
                    formik.setFieldValue("password", event.target.value);
                  }}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormHelperText>{formik.errors.password}</FormHelperText>
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
                onClick={formik.handleSubmit}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
