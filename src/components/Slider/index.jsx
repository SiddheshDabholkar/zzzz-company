import React, { useState } from "react";
import { Link as LinkS } from "react-scroll";
import styled from "styled-components";
import { theme } from "../theme";
import { Layout, Menu, Affix } from "antd";
const { Sider } = Layout;
const { SubMenu } = Menu;

const SiderContainer = styled(Sider)`
  .ant-layout-sider-zero-width-trigger {
    background-color: ${theme.primary};
  }
`;

const StyledLinkS = styled(LinkS)`
  display: flex;
  cursor: pointer;
  flex-direction: row;
  color: #000;
  font-size: 18px;
  padding: 40px;
  justify-content: space-between;
  &:hover {
    color: ${theme.primary};
    font-size: 20px;
    transition: 220ms all ease-in;
  }
`;

const Sliderd = () => {
  return (
    <>
      {/* <Layout> */}
      <Affix offsetTop={0}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          collapsedWidth="0"
          defaultCollapsed="true"
          collapsible
        >
          <div className="logo" />
          <Menu
            style={{ width: 200, height: "100%" }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
          >
            <Menu.Item key="1">
              <StyledLinkS
                to="Home"
                title="Home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Home
              </StyledLinkS>
            </Menu.Item>
            <Menu.Item key="2">
              <StyledLinkS
                to="About"
                title="About"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                About
              </StyledLinkS>
            </Menu.Item>
            <Menu.Item key="3">
              <StyledLinkS
                to="Features"
                title="Features"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Features
              </StyledLinkS>
            </Menu.Item>
            <Menu.Item key="4">
              <StyledLinkS
                to="Services"
                title="Services"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Services
              </StyledLinkS>
            </Menu.Item>
            <Menu.Item key="5">
              <StyledLinkS
                to="ContactUS"
                title="ContactUS"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact Us
              </StyledLinkS>
            </Menu.Item>
          </Menu>
        </Sider>
      </Affix>
    </>
  );
};

export default Sliderd;
