import React, { useEffect, useRef } from "react";
import { SectionTitle } from "../../components/SectionTitle";
import { MainPageContainer } from "../../components/MainPageContainer";
import { RemainingSection } from "../../components/RemainingSection/index";
import { Paragraph } from "../../components/Paragraph";
import { SvgHolder } from "../../components/SVGholder";
import lottie from "lottie-web";
import { SectionTitleContainer } from "../../components/SectionTitle/Container";
import styled from "styled-components";
import Image from "../../Assets/Image/8727.jpg";

const BkhImg = styled.div`
  background-image: url(${Image});
  width: inherit;
  height: inherit;
  padding: 0px;
  margin: 0px;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Above = styled.div`
  @media (min-width: 992px) {
    padding: 80px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function Home() {
  const container = useRef(null);
  ///
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../Assets/JSON/29538-codeblock.json"),
    });
  });
  ///
  return (
    <>
      <MainPageContainer name="Home" small>
        <BkhImg>
          <SectionTitleContainer>
            <SectionTitle>zzzz</SectionTitle>
          </SectionTitleContainer>
          <Above>
            <SvgHolder>
              <div className="container" ref={container}></div>
            </SvgHolder>
            <RemainingSection>
              <Paragraph small>
                <i>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  hendrerit et orci ac condimentum. In sed ex in enim laoreet
                  euismod laoreet nec augue. Aenean sed eros sagittis, ultricies
                  urna eget, elementum dolor. Praesent augue nunc, pellentesque
                  et blandit ac, volutpat ut odio. Morbi facilisis erat nec
                  ipsum mollis, non facilisis nulla laoreet. urna eget,
                  elementum dolor. Praesent augue nunc, pellentesque et blandit
                  ac, volutpat ut odio. Morbi facilisis erat nec ipsum mollis,
                  non facilisis nulla laoreet.
                </i>
              </Paragraph>
            </RemainingSection>
          </Above>
        </BkhImg>
      </MainPageContainer>
    </>
  );
}

export default Home;
