import React from "react";
import styled, { css } from "styled-components";
// import WebsiteLogo from '../../Assets/Logo/logo.svg'
import WebsiteLogo from "../../Assets/Logo/logo.svg";

const LogoContainer = styled.div`
  display: flex;
  padding: 0;
  flex-direction: ${({ inline }) => (inline ? "row" : "column")};
  align-items: center;
`;

const LogoImg = styled.img`
  width: 8em;
  height: 8em;
  cursor: pointer;
  left: 0;

  ${({ inline }) =>
    inline &&
    css`
      width: 24px;
      height: 24px;
      margin-right: 6px;
      cursor: pointer;
    `};

  ${({ small }) =>
    small &&
    css`
      width: 4.8em;
      height: 4.8em;
      cursor: pointer;
    `};
`;

const LogoText = styled.div`
  margin-top: ${({ inline }) => (inline ? 0 : "6px")};
  font-size: ${({ inline, small }) =>
    inline ? "18px" : small ? "23px" : "40px"};
  color: #fff;
  font-weight: 900;
`;

function Logo(props) {
  const { inline, small } = props;
  return (
    <>
      <LogoContainer inline={inline} small={small}>
        <LogoImg src={WebsiteLogo} inline={inline} small={small} />
        <LogoText inline={inline} small={small}>
          zzzzzzz
        </LogoText>
      </LogoContainer>
    </>
  );
}

export default Logo;
