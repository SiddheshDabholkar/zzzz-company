import React from "react";
import { Layout, BackTop } from "antd";
import styled from "styled-components";
import { theme } from "../theme";
import Logo from "../logo";
import {
  YoutubeOutlined,
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
  MediumOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;

const FooterContainer = styled(Footer)`
  background-color: ${theme.primary};
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Line = styled.hr`
  width: 80%;
  justify-content: center;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  } 
`;
const SocialIconLink = styled.a`
  color: #fff;
  font-size: 20px;
  padding: 10px;
  &:hover{
    color:black;
    transition:200ms all ease-in-out;
  }
`;

const CopyRight=styled.h3`
  color:#fff;
  font-size: 18px;
`;

function Footerr() {
  return (
    <>
      <Layout>
        <FooterContainer style={{ textAlign: "center" }}>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <Line />
          <SocialMediaContainer>
            <SocialIconLink href="www.insatgram.com">
              <InstagramOutlined />
            </SocialIconLink>
            <SocialIconLink href="www.facebook.com">
              <FacebookOutlined />
            </SocialIconLink>
            <SocialIconLink href="www.twitter.com">
              <TwitterOutlined />
            </SocialIconLink>
            <SocialIconLink href="www.medium.com">
              <MediumOutlined />
            </SocialIconLink>
            <SocialIconLink href="www.linkedin.com">
              <LinkedinOutlined />
            </SocialIconLink>
            <SocialIconLink href="www.youtube.com">
              <YoutubeOutlined />
            </SocialIconLink>
          </SocialMediaContainer>
          <CopyRight> Made with ♥ by zzzzzz ©  {new Date().getFullYear()}</CopyRight>
          <BackTop />
        </FooterContainer>
      </Layout>
    </>
  );
}

export default Footerr;
