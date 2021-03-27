import React, { useEffect, useRef } from "react";
import { SectionTitle } from "../../components/SectionTitle";
import { MainPageContainer } from "../../components/MainPageContainer";
import { RemainingSection } from "../../components/RemainingSection/index";
import { Paragraph } from "../../components/Paragraph";
import { SvgHolder } from "../../components/SVGholder";
import lottie from "lottie-web";
import { SectionTitleContainer } from "../../components/SectionTitle/Container";
import Image from "../../Assets/Image/8727.jpg";
import styled from "styled-components";
const BkhImg = styled.div`
  background-image: url(${Image});
  width: inherit;
  height: inherit;
  padding: 0px;
  margin: 0px;
  background-repeat: no-repeat;
  background-size: cover;
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
      <div>
        <MainPageContainer name="Home" small Image={Image}>
          <BkhImg>
            <SectionTitleContainer>
              <SectionTitle>zzzz</SectionTitle>
            </SectionTitleContainer>
            <SvgHolder>
              <div className="container" ref={container}></div>
            </SvgHolder>
            <RemainingSection>
              <Paragraph>
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
          </BkhImg>
        </MainPageContainer>
      </div>
    </>
  );
}

export default Home;
