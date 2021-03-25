import React from "react";
import Headerrr from "../components/header";
import Sliderd from "../components/Slider";
import Footerr from "../components/footer";
import { Layout } from "antd";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Features from "../pages/Features";
import Contact from "../pages/Contact";

function Main() {
  return (
    <>
      <Layout>
        <Sliderd />
        <Layout>
          <Headerrr />
          <Home />
          <About />
          <Services />
          <Features />
          <Contact />
          <Footerr />
        </Layout>
      </Layout>
    </>
  );
}

export default Main;
