import { ContainerDiv, TerceiraDiv, TextoDiv3 } from "./style";

import Button from "../../components/Button/Button";
import Card from "./components/ImageCard";
import Manage from "../../assets/portfolio/manage/image-portfolio-manage.jpg";
import Bookmark from "../../assets/portfolio/bookmark/image-portfolio-bookmark.jpg";
import Insure from "../../assets/portfolio/insure/image-portfolio-insure.jpg";
import Fylo from "../../assets/portfolio/fylo/image-portfolio-fylo.jpg";

const Portfolio = () => {
  return (
    <ContainerDiv>
      <Card
        onClick={() => {}}
        position="right"
        title="Manage"
        text="Esse projeto me fez criar uma landing page responsiza de acordo com o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas interativas, como o slider de testimoniais."
        image={Manage}
        buttonText="VER PROJETO"
      ></Card>
      <Card
        onClick={() => {}}
        position="left"
        title="Bookmark"
        text="Esse projeto me fez criar uma landing page responsiza de acordo com o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas interativas, como o slider de testimoniais."
        image={Bookmark}
        buttonText="VER PROJETO"
      ></Card>
      <Card
        onClick={() => {}}
        position="right"
        title="Insure"
        text="Esse projeto me fez criar uma landing page responsiza de acordo com o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas interativas, como o slider de testimoniais."
        image={Insure}
        buttonText="VER PROJETO"
      ></Card>
      <Card
        onClick={() => {}}
        position="left"
        title="Fylo"
        text="Esse projeto me fez criar uma landing page responsiza de acordo com o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas interativas, como o slider de testimoniais."
        image={Fylo}
        buttonText="VER PROJETO"
      ></Card>
      <TerceiraDiv>
        <TextoDiv3>Interessado em fazer projetos comigo?</TextoDiv3>
        <Button variant="secondary2" text="CONTATO" onClick={() => {}}></Button>
      </TerceiraDiv>
    </ContainerDiv>
  );
};

export default Portfolio;
