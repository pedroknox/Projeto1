import styled from "styled-components";
import { theme } from "../../theme";

export const PrimButton = styled.button`
  display: flex;
  flex-direction: row;
  width: 200px;
  height: 48px;
  border: unset;
  background-color: ${theme.colors.darkBlue};
  justify-content: flex-start;
  align-items: center;
  padding: 0px;
  cursor: pointer;
  :hover {
    background-color: ${theme.colors.sdc};
  }
`;

export const SecondButton1 = styled.button`
  display: flex;
  flex-direction: row;
  width: 204px;
  height: 48px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.veryLightGray};
  cursor: pointer;
  :hover {
    background-color: ${theme.colors.gDarkBlue};
  }
`;

export const SecondButton2 = styled.button`
  display: flex;
  flex-direction: row;
  width: 204px;
  min-height: 48px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.veryLightGray};
  cursor: pointer;
  :hover {
    background-color: ${theme.colors.gDarkBlue};
  }
`;

export const ButtonFont = styled.span`
  width: 100%;
  text-align: center;
  color: white;
  font-family: ${theme.fonts.spanHeader.fontFamily};
  line-height: ${theme.fonts.spanHeader.lineHeight};
  font-size: ${theme.fonts.spanHeader.size};
  font-style: ${theme.fonts.spanHeader.fontStyle};
  letter-spacing: ${theme.fonts.spanHeader.letterSpacing};
`;

export const ButtonFont2 = styled.span`
  width: 100%;
  text-align: center;
  color: ${theme.colors.gDarkBlue};
  font-family: ${theme.fonts.spanHeader.fontFamily};
  line-height: ${theme.fonts.spanHeader.lineHeight};
  font-size: ${theme.fonts.spanHeader.size};
  font-style: ${theme.fonts.spanHeader.fontStyle};
  letter-spacing: ${theme.fonts.spanHeader.letterSpacing};
`;
