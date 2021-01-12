import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../components/SectionTitle";
import { MainPageContainer } from "../../components/MainPageContainer";

function Home() {
  return (
    <>
      <div>
        <MainPageContainer name="Home">
          <SectionTitle>Home</SectionTitle>
        </MainPageContainer>
      </div>
    </>
  );
}

export default Home;
