import styled from "styled-components";
import { Element } from "react-scroll";

export const MainPageContainer = styled(Element)`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  /* width: 100%; */
  /* height: ${({ small }) => (small ? "650px" : "1000px")}; */
  height: auto;
  background-color: ${({ light }) => (light ? "#0052d4b5" : "#fff")};
`;
