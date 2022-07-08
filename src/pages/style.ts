import styled from "styled-components";
import { theme } from "../theme";

export const ContainerDiv = styled.div`
  display: flex;
  background-color: ${theme.colors.veryLightGray};
  flex-direction: column;
  padding: 64px 164px 0px 165px;
  margin: 0 auto;
`;

export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 54px;
`;

export const Header2Div = styled.div`
  display: flex;
  flex-direction: row;
  gap: 43px;
  align-items: center;
`;

export const HeaderText = styled.span`
  font-family: ${theme.fonts.spanHeader.fontFamily};
  line-height: ${theme.fonts.spanHeader.lineHeight};
  font-size: ${theme.fonts.spanHeader.size};
  font-style: ${theme.fonts.spanHeader.fontStyle};
  cursor: crosshair;
`;

export const FooterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${theme.colors.gDarkBlue};
  max-width: 100%;
  height: 80px;
  align-items: center;
`;

export const Footer2Div = styled.div`
  display: flex;
  flex-direction: row;
  gap: 43px;
  align-items: center;
  margin-left: 165px;
`;

export const FooterLogosDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-right: 165px;
`;
