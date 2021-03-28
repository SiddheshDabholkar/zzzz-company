import React, { useRef, useEffect } from "react";
import { Card } from "antd";
import lottie from "lottie-web";
import styled from "styled-components";
import { Cardpara } from "./Cardpara";

const { Meta } = Card;

const StyledCard = styled(Card)`
  height: auto;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export default function Cards({ title, img, description }) {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: img,
    });
  });
  return (
    <>
      <StyledCard
        hoverable
        cover={<div className="container" ref={container}></div>}
      >
        <Meta title={title} />
        <Cardpara>{description}</Cardpara>
      </StyledCard>
    </>
  );
}
