import { Box, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex>
        <Box bg="tomato">
          {" "}
          <Text>HALO</Text>
        </Box>
        <Box bg="aqua">
          <Text> in</Text>
        </Box>
      </Flex>
    </div>
  );
}
