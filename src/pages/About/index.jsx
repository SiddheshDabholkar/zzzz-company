import React from "react";
import { SectionTitle } from "../../components/SectionTitle";
import { MainPageContainer } from "../../components/MainPageContainer";
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
  width: 100%;
`;

const Remaining = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  width: 100%;
  height: max-content;
`;

const AboutContent = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  padding: 10px;
`;

function About() {
  return (
    <>
      <MainPageContainer name="About" light>
        <SectionTitleContainer>
          <SectionTitle light>About</SectionTitle>
        </SectionTitleContainer>
        <Remaining>
          <AboutContent>
            <Fade left>
              <Nextt reverse>
                <AboutSection {...AboutContent1} />
              </Nextt>
            </Fade>
          </AboutContent>
          <AboutContent>
            <Flip left>
              <Nextt>
                <AboutSection {...AboutContent2} />
              </Nextt>
            </Flip>
          </AboutContent>
          <AboutContent>
            <Fade right>
              <Nextt reverse>
                <AboutSection {...AboutContent3} />
              </Nextt>
            </Fade>
          </AboutContent>
        </Remaining>
      </MainPageContainer>
    </>
  );
}

export default About;
