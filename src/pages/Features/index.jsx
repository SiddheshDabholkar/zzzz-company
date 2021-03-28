import React from "react";
import { SectionTitle } from "../../components/SectionTitle";
import { MainPageContainer } from "../../components/MainPageContainer";
import { dataContent3, dataContent1, dataContent2 } from "./data";
import Cards from "./CardSection";
import styled from "styled-components";

const Remsection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  @media (max-width: 586px) {
    flex-direction: column;
  }
`;

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: auto;
  padding: 3px 3px 15px 3px;
  @media (max-width: 992px) {
    padding: 4px 4px 10px 4px;
    width: 30%;
  }
  @media (max-width: 776px) {
    width: 99%;
    padding: 3px 3px 6px 3px;
  }
  @media (max-width: 586px) {
    width: 99%;
    padding: 4px 4px 12px 4px;
  }
  @media (max-width: 400px) {
    width: 99%;
    padding: 3px 3px 12px 3px;
  }
  @media (max-width: 300px) {
    width: 99%;
    padding: 2px 2px 10px 2px;
  }
  @media (max-width: 200px) {
    width: 99%;
    padding: 1px 1px 8px 1px;
  }
`;

function Features() {
  return (
    <>
      <MainPageContainer name="Features" light>
        <SectionTitle light>Features</SectionTitle>
        <Remsection>
          <StyledCardContainer>
            <Cards {...dataContent1} />
          </StyledCardContainer>
          <StyledCardContainer>
            <Cards {...dataContent2} />
          </StyledCardContainer>
          <StyledCardContainer>
            <Cards {...dataContent3} />
          </StyledCardContainer>
        </Remsection>
      </MainPageContainer>
    </>
  );
}

export default Features;
