import { Button } from "./styles";
import { ButtonProps } from "./types";

const ChangePageButton = ({ onClick, disabled }: ButtonProps): JSX.Element => {
  return <Button onClick={onClick} disabled={disabled}></Button>;
};

export default ChangePageButton;
