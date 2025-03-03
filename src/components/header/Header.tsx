'use client'
import { Container, Flex, Heading, Button, Box } from "@chakra-ui/react";
import classes from "./Header.module.css";
import { useRouter } from "next/navigation";

const Header = () => {

    const router = useRouter();

    const handleBtnHome = () => {
        router.push("/");
    };

    const handleBtnProjects = () => {
        router.push("/projects");
    };

    const handleBtnNews = () => {
        router.push("/news");
    };  

    const handleBtnServices = () => {
        router.push("/services");
    };

    const handleBtnSignIn = () => {
        router.push("/signin");
    };

    const handleBtnSignUp = () => {
        router.push("/signup");
    };

    return (
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
            <Button className={classes.navBtn} onClick={() => handleBtnHome()}>HOME</Button>

            <Button className={classes.navBtn} onClick={() => handleBtnProjects()}>PROJECT</Button>

            <Button className={classes.navBtn} onClick={() => handleBtnNews()}>NEWS</Button>

            <Button className={classes.navBtn} onClick={() => handleBtnServices()}>SERVICES</Button>
          </Box>

          <Box className={classes.auth}>
            <Button className={classes.authBtn} onClick={() => handleBtnSignIn()}>SIGN IN</Button>

            <Button className={classes.authBtn} onClick={() => handleBtnSignUp()}>SIGN UP</Button>
          </Box>
        </Flex>
      </Flex>
    );
}

export default Header;