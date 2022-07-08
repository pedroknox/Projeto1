import styled from "styled-components";
import { theme } from "../../theme";
import macbook from "../../assets/home/image-homepage-hero.jpg";
import profilepic from "../../assets/home/image-homepage-profile.jpg";

export const ContainerDiv = styled.div`
  display: flex;
  background-color: ${theme.colors.veryLightGray};
  flex-direction: column;
  padding: 64px 164px 0px 165px;
  width: 1100px;
  margin: 0 auto;
`;

export const PrimeiraDiv = styled.div`
  background-image: url(${macbook});
  display: flex;
  justify-content: flex-start;
  background-size: cover;
  height: 600px;
  align-items: flex-end;
  margin-bottom: 149px;
`;

export const SegundaDiv = styled.div`
  display: flex;
  height: 600px;
  width: 1110px;
`;

export const FotoDiv = styled.div`
  background-image: url(${profilepic});
  display: flex;
  justify-content: flex-start;
  background-size: cover;
  height: 600px;
  align-items: flex-end;
  width: 540px;
  margin-right: 140px;
`;

export const SobreMimDiv = styled.div`
  display: flex;
  width: 430px;
  height: 42px;
  font-family: ${theme.fonts.SobreMim.fontFamily};
  line-height: ${theme.fonts.SobreMim.lineHeight};
  font-size: ${theme.fonts.SobreMim.size};
  font-style: ${theme.fonts.SobreMim.fontStyle};
  letter-spacing: ${theme.fonts.SobreMim.letterSpacing};
  font-weight: 700;
  margin-top: 51px;
  margin-bottom: 28px;
`;

export const CardDiv = styled.div`
  display: flex;
  width: 445px;
  height: 357px;
  background-color: ${theme.colors.veryLightGray};
  font-family: ${theme.fonts.body.fontFamily};
  line-height: ${theme.fonts.body.lineHeight};
  font-size: ${theme.fonts.body.size};
  font-style: ${theme.fonts.body.fontStyle};
  flex-direction: column;
  justify-content: center;
`;

export const CardDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(51, 50, 61, 0.15);
  border-bottom: 1px solid rgba(51, 50, 61, 0.15);
`;

export const TextoDiv1 = styled.div`
  background-color: ${theme.colors.veryLightGray};
  font-family: ${theme.fonts.h1.fontFamily};
  line-height: ${theme.fonts.h1.lineHeight};
  font-size: ${theme.fonts.h1.size};
  font-style: ${theme.fonts.h1.fontStyle};
  font-weight: 700;
  width: 390px;
  margin: 56px auto auto 18px;
`;

export const TextoDiv2 = styled.div`
  font-family: ${theme.fonts.body.fontFamily};
  line-height: ${theme.fonts.body.lineHeight};
  font-size: ${theme.fonts.body.size};
  font-style: ${theme.fonts.body.fontStyle};
  font-weight: 400;
  width: 430px;
  height: 360px;
  margin-bottom: 24px;
`;

export const BotaoDiv2 = styled.div`
  display: flex;
  justify-content: center;
  border: unset;
`;

export const TerceiraDiv = styled.div`
  display: flex;
  width: 1180px;
  height: 84px;
  justify-content: space-between;
  align-items: center;
  margin-top: 156px;
  margin-bottom: 150px;
`;

export const TextoDiv3 = styled.div`
  display: flex;
  width: 367px;
  height: 84px;
  font-family: ${theme.fonts.SobreMim.fontFamily};
  line-height: ${theme.fonts.SobreMim.lineHeight};
  font-size: ${theme.fonts.SobreMim.size};
  font-style: ${theme.fonts.SobreMim.fontStyle};
  letter-spacing: ${theme.fonts.SobreMim.letterSpacing};
  font-weight: 700;
`;
