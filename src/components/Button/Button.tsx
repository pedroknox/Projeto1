import {
  ButtonFont,
  ButtonFont2,
  PrimButton,
  SecondButton1,
  SecondButton2,
} from "./styles";
import ImgButton from "../../assets/icons/down-arrows.svg";

export interface ButtonProps {
  onClick: () => void;
  variant?: "primary" | "secondary1" | "secondary2";
  text: string;
}

const Button = ({ variant = "primary", text, onClick }: ButtonProps) => {
  if (variant === "primary") {
    return (
      <PrimButton
        onClick={() => {
          onClick();
        }}
      >
        <img src={ImgButton} alt="" />
        <ButtonFont>{text}</ButtonFont>
      </PrimButton>
    );
  } else if (variant === "secondary1") {
    return (
      <SecondButton1
        onClick={() => {
          onClick();
        }}
      >
        {" "}
        <ButtonFont>{text}</ButtonFont>
      </SecondButton1>
    );
  } else {
    return (
      <SecondButton2
        onClick={() => {
          onClick();
        }}
      >
        {" "}
        <ButtonFont2>{text}</ButtonFont2>
      </SecondButton2>
    );
  }
};

export default Button;
