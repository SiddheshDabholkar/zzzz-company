import React, { useEffect, useRef } from "react";
import { SectionTitle } from "../../components/SectionTitle/index";
import { Paragraph } from "../../components/Paragraph/index";
import { SvgHolder } from "../../components/SVGholder/index";
import { StyledButton } from "../../components/button/index";
import { ButtonContainer } from "../../components/button/Container";
import lottie from "lottie-web";
import styled from "styled-components";
import svgq from "../../Assets/JSON/51634-train-buildings.json";

const One = styled.div`
  padding-top: 0px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 376px) {
    width: 96%;
  }
`;

const Twosub = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;

const Two = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 376px) {
    flex-direction: column;
    width: 96%;
  }
`;

export default function AboutSection({ title, paragraph, svg, button }) {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: svgq,
    });
  }, [svg]);
  return (
    <>
      <One>
        <SvgHolder>
          <div className="container" ref={container}></div>
        </SvgHolder>
      </One>
      <Two>
        <Twosub>
          <SectionTitle small>{title}</SectionTitle>
          <Paragraph small>{paragraph}</Paragraph>
          <ButtonContainer>
            <StyledButton small>{button}</StyledButton>
          </ButtonContainer>
        </Twosub>
      </Two>
    </>
  );
}
