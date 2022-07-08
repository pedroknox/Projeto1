import styled from "styled-components";
import { theme } from "../../../theme";

export const ContainerCardDiv = styled.div`
  display: flex;
  height: 500px;
  width: 1015px;
  flex-direction: row;
  margin-bottom: 80px;
  justify-content: space-between;
  align-self: center;
`;

export const OuterCardDiv = styled.div`
  display: flex;
`;

export const CardDiv = styled.div`
  display: flex;
  width: 350px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const TextTitle = styled.p`
  font-family: ${theme.fonts.SobreMim.fontFamily};
  line-height: ${theme.fonts.SobreMim.lineHeight};
  font-size: ${theme.fonts.SobreMim.size};
  font-style: ${theme.fonts.SobreMim.fontStyle};
  font-weight: 700;
  margin-bottom: 28px;
`;

export const TextCard = styled.p`
  font-family: ${theme.fonts.body.fontFamily};
  line-height: ${theme.fonts.body.lineHeight};
  font-size: ${theme.fonts.body.size};
  font-style: ${theme.fonts.body.fontStyle};
  margin-bottom: 54px;
`;
