import React from "react";
import { ButtonProps } from "../interfaces";
import { Button, Content, Touchable } from "./styles";

export const PrimaryButton: React.FC<ButtonProps> = ({
  onPress,
  text,
  disabled,
  backgroundColor,
}) => (
  <Touchable onPress={onPress}>
    <Content disabled={disabled} backgroundColor={backgroundColor}>
      <Button>{text}</Button>
    </Content>
  </Touchable>
);
