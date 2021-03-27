import styled from "styled-components";
import { Element } from "react-scroll";

export const MainPageContainer = styled(Element)`
  display: flex;
  flex: 1;
  /* padding: 20px 10px; */
  flex-direction: column;
  align-items: center;
  height: ${({ small }) => (small ? "650px" : "1000px")};
  background-color: ${({ light }) => (light ? "#0052d4b5" : "#fff")};
`;
