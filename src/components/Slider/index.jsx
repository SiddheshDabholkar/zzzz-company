import React from "react";
import { Layout, Menu, Affix } from "antd";
import styled from "styled-components";
import { theme } from "../theme";
import { Link as LinkS } from "react-scroll";

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

const SiderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: #f0f2f5;
`;

const Sliderd = () => {
  return (
    <>
      <Affix offsetTop={0}>
        <SiderContainer collapsedWidth="0" defaultCollapsed="true" collapsible>
          <Menu mode="inline" defaultSelectedKeys={["4"]}>
            <SiderContent>
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
            </SiderContent>
          </Menu>
        </SiderContainer>
      </Affix>
    </>
  );
};

export default Sliderd;
