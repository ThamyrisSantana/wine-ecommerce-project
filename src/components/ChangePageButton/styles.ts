import styled from "styled-components";

export const Button = styled.button`
  width: 5rem;
  height: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #b6116e;
  border: none;
  color: #fff;

  font-size: 20px;
  border-radius: 5px;

  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    filter: brightness(0.8);
    border: 1px solid #b6116e;

    box-shadow: none;
  }
  box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);
`;
