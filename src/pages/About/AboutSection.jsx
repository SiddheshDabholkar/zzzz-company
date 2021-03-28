import React, { useEffect, useRef } from "react";
import { SectionTitle } from "../../components/SectionTitle/index";
import { Paragraph } from "../../components/Paragraph/index";
import { SvgHolder } from "../../components/SVGholder/index";
import { StyledButton } from "../../components/button/index";
import { ButtonContainer } from "../../components/button/Container";
import styled from "styled-components";
import lottie from "lottie-web";

const Twosub = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;

const One = styled.div`
  padding-top: 0px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  @media (min-width: 992px) {
    width: 50%;
  }
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Two = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  @media (min-width: 992px) {
    width: 50%;
  }
  @media (max-width: 992px) {
    width: 100%;
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
      animationData: svg,
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
