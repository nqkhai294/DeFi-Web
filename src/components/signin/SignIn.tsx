"use client";

import { useState } from "react";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import classes from "./SignIn.module.css";
import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";

const SignIn = () => {
  const router = useRouter();

  const [isSignUpClicked, setIsSignUpClicked] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpClicked(!isSignUpClicked);
  };

  return (
    <Flex className={classes.container}>
      <div className={classes.wrapper}>
        <span className={classNames(classes.wave, classes.animation, isSignUpClicked ? classes.active : "")}></span>
        <span className={classNames(classes.wave2, classes.animation, isSignUpClicked ? classes.active : "")}></span>

        <div className={classNames(classes.formBox, classes.login, isSignUpClicked ? classes.active : "")}>
          <form className={classNames(classes.form, classes.animation)} action="#" >
            <Heading fontSize={"32px"} textAlign={"center"} color={"white"}  >
              Login
            </Heading>
            <div className={classes.inputBox}>
              <input type="text" name="username" required />
              <label>Username</label>
              <i className="bx bxs-user"></i>
            </div>

            <div className={classes.inputBox}>
              <input type="password" name="username" required />
              <label>Password</label>
              <i className="bx bxs-lock-alt"></i>
            </div>

            <Button
              className={classes.btn}
              type="submit"
              onClick={() => router.push("/")}
            >
              Login
            </Button>

            <Box className={classes.link}>
              <p>
                Don't have an account ?{" "}
                <a href="#" className={classNames(classes.btnSignup)} onClick={() => handleSignUpClick()}>
                  Sign up
                </a>
              </p>
            </Box>
          </form>

          <div className={classNames(classes.infoContent, classes.log, classes.animation)}>
            <Heading
              textTransform={"uppercase"}
              fontSize={"36px"}
              lineHeight={1.3}
              color={"#fff"}
            >
              Welcome Back!
            </Heading>
            <p>You are welcome!</p>
          </div>
        </div>

        <div className={classNames(classes.formBox, classes.register)}>
        <form className={classNames(classes.form, classes.animation)} action="#" >
            <Heading fontSize={"32px"} textAlign={"center"} color={"white"}>
              Sign Up
            </Heading>
            <div className={classes.inputBox}>
              <input type="text" name="username" required />
              <label>Username</label>
              <i className="bx bxs-user"></i>
            </div>

            <div className={classes.inputBox}>
              <input type="password" name="password" required />
              <label>Password</label>
              <i className="bx bxs-lock-alt"></i>
            </div>

            <div className={classes.inputBox}>
              <input type="password" name="repassword" required />
              <label>Re-Password</label>
              <i className="bx bxs-lock-alt"></i>
            </div>

            <Button
              className={classes.btn}
              type="submit"
              onClick={() => router.push("/")}
            >
              Register
            </Button>

            <Box className={classes.link}>
              <p>
                Already have an account ?{" "}
                <a href="#" className={classes.btnSignup}>
                  Login
                </a>
              </p>
            </Box>
          </form>

          <div className={classNames(classes.infoContent, classes.reg, classes.animation)}>
            <Heading
              textTransform={"uppercase"}
              fontSize={"36px"}
              lineHeight={1.3}
              color={"#fff"}
            >
              Let's goooo
            </Heading>
            <p>You are welcome!</p>
          </div>
        </div>
      </div>
    </Flex>
  );
};

export default SignIn;


