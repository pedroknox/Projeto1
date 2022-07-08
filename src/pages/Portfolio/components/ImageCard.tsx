import Button from "../../../components/Button/Button";
import {
  CardDiv,
  ContainerCardDiv,
  OuterCardDiv,
  TextCard,
  TextTitle,
} from "./style";

export interface CardProps {
  onClick: () => void;
  position?: "left" | "right";
  title: string;
  text: string;
  image: string;
  buttonText: string;
}

const Card = ({
  onClick,
  position = "left",
  title,
  text,
  image,
  buttonText,
}: CardProps) => {
  return (
    <ContainerCardDiv>
      {position === "left" && <img src={image} alt="" width="540px"></img>}
      <OuterCardDiv>
        <CardDiv style={{ flex: 1 }}>
          <TextTitle>{title}</TextTitle>
          <TextCard>{text}</TextCard>
          <Button
            variant="secondary2"
            text={buttonText}
            onClick={() => {}}
          ></Button>
        </CardDiv>
      </OuterCardDiv>
      {position === "right" && <img src={image} alt="" width="540px"></img>}
    </ContainerCardDiv>
  );
};

export default Card;
