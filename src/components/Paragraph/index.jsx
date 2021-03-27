import styled from "styled-components";

export const Paragraph = styled.p`
  padding: 20px;
  /* margin: 20px; */
  display: flex;
  font-size: ${({ small }) => (small ? "10px" : "16px")};

  text-align: center;
  align-items: center;
  flex-direction: row;
  width: 50%;
  flex-wrap: wrap;
  flex: 1;
  @media (max-width: 992px) {
    font-size: ${({ small }) => (small ? "9px" : "15px")};

    flex-direction: row;
    padding: 8px;
    /* margin: 8px; */
    width: 50%;
  }
  @media (max-width: 768px) {
    font-size: ${({ small }) => (small ? "8px" : "14px")};
    flex-direction: row;
    padding: 8px;
    /* margin: 8px; */
    width: 50%;
  }
  @media (max-width: 576px) {
    font-size: ${({ small }) => (small ? "7px" : "13px")};
    flex-direction: column;
    padding: 7px;
    /* margin: 7px; */
    width: 100%;
  }
  @media (max-width: 350px) {
    font-size: ${({ small }) => (small ? "6px" : "11px")};
    flex-direction: column;
    padding: 6px;
    /* margin: 30px; */
    width: 100%;
  }
  @media (max-width: 200px) {
    font-size: ${({ small }) => (small ? "5px" : "10px")};
    flex-direction: column;
    padding: 10px;
    /* margin: 20px; */
    width: 100%;
  }
`;
