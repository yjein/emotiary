import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  color?: string;
}

const StyleButton = styled.button<{ color?: string }>`
  padding: 10px 20px;
  height: 40px;
  font-size: 16px;
  text-align: center;
  background-color: ${({ color }) => color};
  border-radius: 10px;
  cursor: pointer;
`;

const Button: React.FC<Props> = (props: Props) => {
  const { children, color } = props;

  return <StyleButton background-color={color}>{children}</StyleButton>;
};

export default Button;
