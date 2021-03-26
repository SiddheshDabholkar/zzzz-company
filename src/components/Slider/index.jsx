import React from "react";
import { Link as LinkS } from "react-scroll";
import styled from "styled-components";
import { theme } from "../theme";
import { Layout, Menu, Affix } from "antd";
import {
  HomeOutlined,
  EyeOutlined,
  BookOutlined,
  CustomerServiceOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
const { Sider } = Layout;

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
      <Affix offsetTop={0}>
        <SiderContainer
          breakpoint="lg"
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
            <Menu.Item icon={<HomeOutlined />}>
              Home
              <StyledLinkS
                to="Home"
                title="Home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              />
            </Menu.Item>
            <Menu.Item icon={<BookOutlined />}>
              About
              <StyledLinkS
                to="About"
                title="About"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              />
            </Menu.Item>
            <Menu.Item icon={<EyeOutlined />}>
              Features
              <StyledLinkS
                to="Features"
                title="Features"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              />
            </Menu.Item>

            <Menu.Item icon={<CustomerServiceOutlined />}>
              Services
              <StyledLinkS
                to="Services"
                title="Services"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              />
            </Menu.Item>
            <Menu.Item icon={<ContactsOutlined />}>
              Contact Us
              <StyledLinkS
                to="ContactUS"
                title="ContactUS"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              />
            </Menu.Item>
          </Menu>
        </SiderContainer>
      </Affix>
    </>
  );
};

export default Sliderd;
