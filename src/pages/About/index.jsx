import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../components/SectionTitle";
import { MainPageContainer } from "../../components/MainPageContainer";

function About() {
  return (
    <>
      <div>
        <MainPageContainer name="About" light>
          <SectionTitle>About</SectionTitle>
        </MainPageContainer>
      </div>
    </>
  );
}

export default About;
