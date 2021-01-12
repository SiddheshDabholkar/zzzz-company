import styled from "styled-components";
import { Element } from "react-scroll";

export const MainPageContainer = styled(Element)`
  display: flex;
  padding: 50px 30px 50px 30px;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  height:1000px;
  background-color: ${({light})=>(light ? '#0052d4b5':'#fff')};
`;

