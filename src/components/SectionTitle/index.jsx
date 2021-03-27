import styled from "styled-components";

export const SectionTitle = styled.h1`
  font-size: ${({ small }) => (small ? "20px" : "34px")};
  color: ${({ light }) => (light ? "#fff" : "#0052D4")};
  font-weight: bold;
  text-align: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 992px) {
    font-size: ${({ small }) => (small ? "19px" : "32px")};
  }
  @media (max-width: 768px) {
    font-size: ${({ small }) => (small ? "17px" : "30px")};
  }
  @media (max-width: 576px) {
    font-size: ${({ small }) => (small ? "15px" : "28px")};
  }
  @media (max-width: 350px) {
    font-size: ${({ small }) => (small ? "13px" : "26px")};
  }
  @media (max-width: 200px) {
    font-size: ${({ small }) => (small ? "11px" : "24px")};
  }
`;
