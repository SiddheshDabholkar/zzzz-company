import styled from "styled-components";

export const SvgHolder = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  @media (min-width: 992px) {
    width: 49%;
    flex-wrap: nowrap;
    /* display: inline-block; */
  }
`;
