import React, { useState } from "react";
import { Layout, Menu, Drawer, Button } from "antd";
import { theme } from "../theme";
import { Link as LinkS } from "react-scroll";
import styled from "styled-components";
import Logo from "../logo";
import {
  HomeOutlined,
  EyeOutlined,
  BookOutlined,
  ContactsOutlined,
  BarsOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

const DrawerButton = styled(Button)`
  background-color: #1038ed !important;
  &:hover {
    background-color: #1038ed;
  }
`;

const MiddleContainer = styled.div`
  align-items: center;
  float: left;
  display: flex;
  flex-direction: row;
`;

const HeaderContainer = styled(Header)`
  width: 100%;
  padding: 0 6px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.primary};
`;

const StyledMenu = styled(Menu)`
  width: 200px;
  padding: 30px;
  height: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledMenuItem = styled(Menu.Item)`
  &:hover {
    border-bottom: 1px solid #0052d4;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const LogoContainer = styled.div``;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledLinkS = styled(LinkS)`
  display: flex;
  cursor: pointer;
  flex-direction: row;
  color: #fff;
  font-size: 15px;
  padding: 40px;
  justify-content: space-between;
  align-items: center;

  &:hover {
    color: black;
    transition: 220ms all ease-in-out;
    border-bottom: 2px solid #000;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 992px) {
    font-size: 14px;
    padding: 6px;
    justify-content: space-between;
  }
  @media screen and (max-width: 1200px) {
    font-size: 15px;
    padding: 8px;
    justify-content: space-between;
  }
`;

const StyledSpan = styled.span`
  margin-left: 8px;
`;

function Headerrr() {
  const [state, setState] = useState(false);
  const { placement } = state;

  const showDrawer = () => {
    setState(true);
  };

  const onClose = () => {
    setState(false);
  };
  return (
    <>
      <Layout>
        <HeaderContainer>
          <MiddleContainer>
            <DrawerButton icon={<BarsOutlined />} onClick={showDrawer} />
            <LogoContainer>
              <Logo inline />
            </LogoContainer>
          </MiddleContainer>
          <MenuContainer>
            <StyledLinkS
              to="Home"
              title="Home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <HomeOutlined />
              <StyledSpan>Home</StyledSpan>
            </StyledLinkS>
            <StyledLinkS
              to="About"
              title="About"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <BookOutlined />
              <StyledSpan>About</StyledSpan>
            </StyledLinkS>
            <StyledLinkS
              to="Features"
              title="Features"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <EyeOutlined />
              <StyledSpan></StyledSpan>
              Features
            </StyledLinkS>

            <StyledLinkS
              to="ContactUS"
              title="ContactUS"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <ContactsOutlined />
              <StyledSpan>Contact Us</StyledSpan>
            </StyledLinkS>
          </MenuContainer>
        </HeaderContainer>
        <Drawer
          placement="left"
          closable={false}
          onClose={onClose}
          visible={state}
          key={placement}
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
                onClick={() => {
                  setState(false);
                }}
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
                onClick={() => {
                  setState(false);
                }}
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
                onClick={() => {
                  setState(false);
                }}
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
                onClick={() => {
                  setState(false);
                }}
              />
            </StyledMenuItem>
          </StyledMenu>
        </Drawer>
      </Layout>
    </>
  );
}

export default Headerrr;
