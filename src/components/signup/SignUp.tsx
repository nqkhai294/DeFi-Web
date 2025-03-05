"use client";

import classNames from "classnames";
import classes from "./SignUp.module.css";
import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";

const SignUp = () => {
  return (
    <Box className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.formBox}>
          <form className={classes.infoForm} action="#">
            <Heading fontSize={"32px"} textAlign={"center"} color={"white"}>
              Confirm Info
            </Heading>

            <div className={classes.inputBox}>
              <input type="text" name="username" required />
              <label>First Name</label>
              <i className="bx bxs-user"></i>
            </div>

            <div className={classes.inputBox}>
              <input type="text" name="username" required />
              <label>Last Name</label>
              <i className="bx bxs-user"></i>
            </div>

            <div className={classes.inputBox}>
              <input type="text" name="username" required />
              <label>Email</label>
              <i className="bx bxs-user"></i>
            </div>

            <div className={classes.inputBox}>
              <input type="text" name="username" required />
              <label>Phone Number</label>
              <i className="bx bxs-user"></i>
            </div>

            <div className={classes.inputBox}>
              <input type="text" name="username" required />
              <label>You are ?</label>
              <i className="bx bxs-user"></i>
            </div>
          </form>
        </div>
      </div>
    </Box>
  );
};

export default SignUp;
