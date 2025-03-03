"use client";
import { Container, Flex, Heading, Button, Box } from "@chakra-ui/react";
import classes from "./HomePage.module.css";

const HomePage = () => {

  return (
    <Box
      className={classes.container}
      h="100vh"
      bgImage="url('/assets/bg.jpg')"
      bgSize={"cover"}
    >
      <Flex
        className={classes.header}
        alignItems={"center"}
        justifyContent={"space-between"}
        p={4}
      >
        <Heading color="white" fontSize="2rem" fontFamily={'CabinRegular'}>
          HUGEDREAM
        </Heading>

        <Flex
        className={classes.nav}
          p={2}
          w='68vw'
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box className={classes.navLinks}>
            <Button className={classes.navBtn}>HOME</Button>

            <Button className={classes.navBtn}>PROJECT</Button>

            <Button className={classes.navBtn}>NEWS</Button>

            <Button className={classes.navBtn}>SERVICES</Button>
          </Box>

          <Box className={classes.auth}>
            <Button className={classes.authBtn}>SIGN IN</Button>

            <Button className={classes.authBtn}>SIGN UP</Button>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HomePage;
