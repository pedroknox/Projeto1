import { Outlet, useNavigate } from "react-router-dom";
import {
  ContainerDiv,
  Footer2Div,
  FooterDiv,
  FooterLogosDiv,
  Header2Div,
  HeaderDiv,
  HeaderText,
} from "./style";
import LogoDark from "../assets/logo-dark.svg";
import LogoLight from "../assets/logo-light.svg";
import GitLogoLight from "../assets/icons/github-light.svg";
import TwitterLogoLight from "../assets/icons/twitter-light.svg";
import LinkedinLogoLight from "../assets/icons/linkedin-light.svg";
import { theme } from "../theme";

const Main = () => {
  const navigation = useNavigate();
  return (
    <div>
      <ContainerDiv>
        {" "}
        <HeaderDiv>
          <img src={LogoDark} alt="" />
          <Header2Div>
            <HeaderText
              onClick={() => {
                navigation("home");
              }}
            >
              HOME
            </HeaderText>
            <HeaderText
              onClick={() => {
                navigation("portfolio");
              }}
            >
              PORTFOLIO
            </HeaderText>
            <HeaderText
              onClick={() => {
                navigation("contato");
              }}
            >
              CONTATO
            </HeaderText>
          </Header2Div>
        </HeaderDiv>
        <Outlet></Outlet>
      </ContainerDiv>
      <FooterDiv>
        <Footer2Div>
          {" "}
          <img src={LogoLight} alt="" />{" "}
          <HeaderText style={{ color: theme.colors.veryLightGray }}>
            HOME
          </HeaderText>
          <HeaderText style={{ color: theme.colors.veryLightGray }}>
            PORTFOLIO
          </HeaderText>
          <HeaderText style={{ color: theme.colors.veryLightGray }}>
            CONTATO
          </HeaderText>
        </Footer2Div>
        <FooterLogosDiv>
          <img src={GitLogoLight} alt="" />
          <img src={TwitterLogoLight} alt="" />
          <img src={LinkedinLogoLight} alt="" />
        </FooterLogosDiv>
      </FooterDiv>
    </div>
  );
};

export default Main;
