import React from "react";
import Headerrr from "../components/header";
import Footerr from "../components/footer";
import { Layout } from "antd";
import Home from "../pages/Home";
import About from "../pages/About";
import Features from "../pages/Features";
import Contact from "../pages/Contact";

function Main() {
  return (
    <>
      <Layout>
        <Headerrr />
        <Home />
        <About />
        <Features />
        <Contact />
        <Footerr />
      </Layout>
    </>
  );
}

export default Main;
