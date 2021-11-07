import React from 'react';
import {ButtonProps} from '../interfaces';
import {Content, Touchable} from './styles';

export const PrimaryButton: React.FC<ButtonProps> = ({
  onPress,
  text,
  disabled,
}) => {
  return (
    <Touchable onPress={onPress}>
      <Content disabled={disabled}>{text}</Content>
    </Touchable>
  );
};
