import { Button } from "./styles";
import { ButtonProps } from "./types";

export const ChangePageButton: React.FC<ButtonProps> = ({
  onClick,
  disabled,
}) => {
  return <Button onClick={onClick} disabled={disabled}></Button>;
};

// export default ChangePageButton;
