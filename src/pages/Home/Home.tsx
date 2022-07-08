import Button from "../../components/Button/Button";
import {
  ContainerDiv,
  PrimeiraDiv,
  CardDiv,
  TextoDiv1,
  FotoDiv,
  SegundaDiv,
  SobreMimDiv,
  CardDiv2,
  TextoDiv2,
  BotaoDiv2,
  TerceiraDiv,
  TextoDiv3,
} from "./style";

const Home = () => {
  return (
    <div>
      <ContainerDiv>
        <PrimeiraDiv>
          <CardDiv>
            <TextoDiv1>
              Olá, me chamo Alex Spencer e eu amo construir websites lindos
            </TextoDiv1>
            <Button
              variant="primary"
              text="SOBRE MIM"
              onClick={() => {}}
            ></Button>
          </CardDiv>
        </PrimeiraDiv>
        <SegundaDiv>
          <FotoDiv>
            <span></span>
          </FotoDiv>
          <CardDiv2>
            <SobreMimDiv>Sobre mim</SobreMimDiv>
            <TextoDiv2>
              Sou um desenvolvedor front-end júnior procurando por uma
              oportunidade. Eu foco em escrever HTML acessível, usando práticas
              modernas de CSS e escrevendo um JavaScript limpo. Quando estou
              escrevendo código JavaScript, na maioria das vezes estou usando
              React, mas posso me adaptar para qualquer ferramenta se
              necessário. Moro em Londres, UK, mas também seria feliz
              trabalhando remotamente e tenho experiência em times remotos.
              Quando não estou codando, poderá me achar fora de casa. Eu adoro
              estar próximo a natureza seja para uma caminhada, corrida ou
              ciclismo. Eu amaria se você desse uma olhada no meu trabalho.
            </TextoDiv2>
            <BotaoDiv2>
              <Button
                variant="secondary2"
                text="IR PARA PORTFOLIO"
                onClick={() => {}}
              ></Button>
            </BotaoDiv2>
          </CardDiv2>
        </SegundaDiv>
        <TerceiraDiv>
          <TextoDiv3>Interessado em fazer projetos comigo?</TextoDiv3>
          <Button
            variant="secondary2"
            text="CONTATO"
            onClick={() => {}}
          ></Button>
        </TerceiraDiv>
      </ContainerDiv>
    </div>
  );
};

export default Home;
