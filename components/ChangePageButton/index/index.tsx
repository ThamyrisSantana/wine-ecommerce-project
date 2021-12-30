import { Button } from "./styles";

interface ButtonProps {
  onClick: () => {};
  disabled: boolean;
}

const ChanePageButton: React.FC<ButtonProps> = ({ onClick, disabled }) => {
  return <Button onClick={onClick} disabled={disabled}></Button>;
};

export default ChanePageButton;
