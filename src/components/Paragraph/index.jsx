import styled from "styled-components";

export const Paragraph = styled.p`
  flex: 1;
  display: flex;
  text-align: center;
  align-items: center;
  flex-wrap: no-wrap;

  @media (min-width: 992px) {
    flex-direction: row;
    padding: 20px;
    font-size: ${({ small }) => (small ? "20px" : "30px")};
    width: 50%;
  }
  @media (max-width: 992px) {
    font-size: ${({ small }) => (small ? "16px" : "26px")};
    flex-direction: column;
    padding: 10px;
    width: 100%;
  }
  @media (max-width: 768px) {
    font-size: ${({ small }) => (small ? "15px" : "24px")};
    flex-direction: column;
    padding: 10px;
    width: 100%;
  }
  @media (max-width: 576px) {
    font-size: ${({ small }) => (small ? "14px" : "22px")};
    flex-direction: column;
    padding: 11px;
    width: 100%;
  }
  @media (max-width: 376px) {
    font-size: ${({ small }) => (small ? "13px" : "20px")};
    flex-direction: column;
    padding: 10px;
    width: 100%;
  }
  @media (max-width: 201px) {
    font-size: ${({ small }) => (small ? "12px" : "19px")};
    flex-direction: column;
    padding: 10px;
    width: 100%;
  }
`;
