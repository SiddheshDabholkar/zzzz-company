import styled from "styled-components";

export const SvgHolder = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 50%;
  @media (max-width: 993px) {
    padding: 8px;
    width: 50%;
  }
  @media (max-width: 761px) {
    padding: 8px;
    width: 50%;
  }
  @media (max-width: 571px) {
    padding: 15px;
    width: 100%;
  }
  @media (max-width: 351px) {
    padding: 6px;
    width: 100%;
  }
  @media (max-width: 201px) {
    padding: 5px;
    width: 100%;
  }
`;
