import styled from "styled-components";
import { Button } from "antd";

export const StyledButton = styled(Button)`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: ${({ small }) => (small ? "8px" : "15px")};
  background-color: ${({ light }) => (light ? "#fff" : "#0052D4")};
  color: ${({ light }) => (light ? "#0052D4" : "#fff")};
  border-radius: 50px;
  border-color: ${({ light }) => (light ? "#fff" : "#0052D4")};
  padding-top: 1px;
  &:hover {
    border-color: ${({ light }) => (light ? "#0052D4" : "#000")};
    background-color: ${({ light }) => (light ? "#0052D4" : "#000")};
  }
`;
