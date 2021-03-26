import React from "react";
import { Layout } from "antd";
import { theme } from "../theme";
import { Link as LinkS } from "react-scroll";
import styled from "styled-components";
import Logo from "../logo";

const { Header } = Layout;

const HeaderContainer = styled(Header)`
  width: 100%;
  padding: 0 6px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.primary};
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
  font-size: 18px;
  padding: 40px;
  justify-content: space-between;

  &:hover {
    color: black;
    transition: 220ms all ease-in-out;
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

function Headerrr() {
  return (
    <>
      <Layout>
        <HeaderContainer>
          <LogoContainer>
            <Logo inline />
          </LogoContainer>
          <MenuContainer>
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
          </MenuContainer>
        </HeaderContainer>
      </Layout>
    </>
  );
}

export default Headerrr;
