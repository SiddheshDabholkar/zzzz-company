import styled from "styled-components";

export const RemainingSection = styled.div`
  width: 100%;
  padding: 1px;
  margin: 1px;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  @media (min-width: 992px) {
    width: 49%;
    flex-wrap: nowrap;
  }
`;
