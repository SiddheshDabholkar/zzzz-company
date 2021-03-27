import React from "react";
import { SectionTitle } from "../../components/SectionTitle";
import { MainPageContainer } from "../../components/MainPageContainer";
import { RemainingSection } from "../../components/RemainingSection/index";
import { SectionTitleContainer } from "../../components/SectionTitle/Container";
import { AboutContent1, AboutContent2, AboutContent3 } from "./data";
import AboutSection from "./AboutSection";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import styled from "styled-components";

const Nextt = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  align-items: center;
  min-width: 100%;
`;

function About() {
  return (
    <>
      <MainPageContainer name="About" light>
        <SectionTitleContainer>
          <SectionTitle light>About</SectionTitle>
        </SectionTitleContainer>
        <RemainingSection>
          <Fade left>
            <Nextt reverse>
              <AboutSection {...AboutContent1} />
            </Nextt>
          </Fade>
          <Flip left>
            <Nextt>
              <AboutSection {...AboutContent2} />
            </Nextt>
          </Flip>
          <Fade right>
            <Nextt reverse>
              <AboutSection {...AboutContent3} />
            </Nextt>
          </Fade>
        </RemainingSection>
      </MainPageContainer>
    </>
  );
}

export default About;
