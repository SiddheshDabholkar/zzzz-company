import React, { useState } from "react";
import { Link as LinkS } from "react-scroll";
import styled from "styled-components";
import { theme } from "../theme";
import { Layout, Menu, Affix } from "antd";
import {
  HomeOutlined,
  EyeOutlined,
  BookOutlined,
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

const StyledMenu = styled(Menu)`
  width: 200px;
  padding: 30px;
  height: 1000px;
`;

const StyledMenuItem = styled(Menu.Item)`
  &:hover {
    border-bottom: 1px solid #0052d4;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const Sliderd = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <>
      <Affix offsetTop={0}>
        <SiderContainer
          breakpoint="xxl"
          collapsedWidth="0"
          defaultCollapsed="true"
          collapsible
          collapsed={!collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
        >
          <StyledMenu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
          >
            <StyledMenuItem icon={<HomeOutlined />}>
              Home
              <StyledLinkS
                to="Home"
                title="Home"
                spy={true}
                smooth={true}
                offset={50}
                duration={700}
                onClick={() => setCollapsed(false)}
              />
            </StyledMenuItem>
            <StyledMenuItem icon={<BookOutlined />}>
              About
              <StyledLinkS
                to="About"
                title="About"
                spy={true}
                smooth={true}
                offset={50}
                duration={700}
                onClick={() => setCollapsed(false)}
              />
            </StyledMenuItem>
            <StyledMenuItem icon={<EyeOutlined />}>
              Features
              <StyledLinkS
                to="Features"
                title="Features"
                spy={true}
                smooth={true}
                offset={50}
                duration={700}
                onClick={() => setCollapsed(false)}
              />
            </StyledMenuItem>

            <StyledMenuItem icon={<ContactsOutlined />}>
              Contact Us
              <StyledLinkS
                to="ContactUS"
                title="ContactUS"
                spy={true}
                smooth={true}
                offset={50}
                duration={700}
                onClick={() => setCollapsed(false)}
              />
            </StyledMenuItem>
          </StyledMenu>
        </SiderContainer>
      </Affix>
    </>
  );
};

export default Sliderd;
