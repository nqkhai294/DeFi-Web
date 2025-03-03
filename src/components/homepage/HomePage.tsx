"use client";
import {Box } from "@chakra-ui/react";
import classes from "./HomePage.module.css";
import Header from "../header/Header";

const HomePage = () => {

  return (
    <Box
      className={classes.container}
      h="100vh"
      bgImage="url('/assets/image/bg.jpg')"
      bgSize={"cover"}
    >
      <Header />
    </Box>
  );
};

export default HomePage;
