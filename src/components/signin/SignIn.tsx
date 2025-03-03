"use client";

import { useRouter } from "next/navigation";
import classes from "./SignIn.module.css";
import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";

const SignIn = () => {
  const router = useRouter();

  return (
    <Flex className={classes.container}>
    
      <Box className={classes.box}>
        <form className={classes.form}>
        <Heading fontSize={'32px'} textAlign={'center'}>Login</Heading>
          <div className={classes.inputBox}>
            <input type="text" name="username" required />
            <label>Username</label>
            <i className="bx bxs-user"></i>
          </div>

          <div className={classes.inputBox}>
            <input type="text" name="username" required />
            <label>Password</label>
            <i className="bx bxs-lock-alt"></i>
          </div>

          <Button
            className={classes.btnLogin}
            type="submit"
            onClick={() => router.push("/")}
          >
            Login
          </Button>

          <Box className={classes.link}>
            <p>
              Don't have an account ?{" "}
              <a href="#" className={classes.btnSignup}>
                Sign Up
              </a>
            </p>
          </Box>
        </form>

        <div className={classes.infoContent}>
            <Heading textTransform={'uppercase'} fontSize={36} lineHeight={1.3}>Welcome Back!</Heading>
            <p >Hello boy, lai la anh dayyyyyy</p>
        </div>
      </Box>
    </Flex>
  );
};

export default SignIn;
