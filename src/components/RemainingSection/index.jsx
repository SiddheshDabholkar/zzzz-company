import styled from "styled-components";

export const RemainingSection = styled.div`
  width: 98%;
  height: 98%;
  padding: 1px;
  margin: 1px;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  /* flex-wrap: wrap; */
  @media (max-width: 760px) {
    width: 96%;
    flex-direction: column;
  }
`;
