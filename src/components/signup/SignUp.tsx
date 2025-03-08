"use client";

import classNames from "classnames";
import classes from "./SignUp.module.css";
import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();

  const roles = [
    { id: 1, name: "Nha dau tu" },
    { id: 2, name: "Khoi nghiep" },
  ];

  return (
    <Box className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.formBox}>
          <form className={classes.infoForm} action="#">
            <Heading fontSize={"38px"} textAlign={"center"} color={"white"}>
              Registration
            </Heading>

            <div className={classes.nameGroup}>
              <div className={classes.inputBox}>
                <input type="text" name="firstname" required />
                <label>First Name</label>
              </div>

              <div className={classes.inputBox}>
                <input type="text" name="lastname" required />
                <label>Last Name</label>
              </div>
            </div>

            <div className={classes.inputBox}>
              <input type="text" name="email" required />
              <label>Email</label>
            </div>

            <div className={classes.inputBox}>
              <input type="text" name="phone" required />
              <label>Phone Number</label>
            </div>

            <div className={classes.inputBox}>
            <select
                id="role"
                name="role"
                className={classes.role}
              >
                <option value="">-- Select your role --</option>
                {roles.map(role => (
                  <option key={role.id} value={role.id} className={classes.option}>
                    {role.name}
                  </option>
                ))}
              </select>
            </div>

            <Button
              className={classes.btn}
              type="submit"
              onClick={() => router.push("/")}
            >
              Register
            </Button>
          </form>
        </div>
      </div>
    </Box>
  );
};

export default SignUp;
