import styled from "styled-components/native";

interface ButtonProps {
  disabled: boolean | undefined;
}

export const Content = styled.Text<ButtonProps>`
  color: ${(props) => (props.disabled ? "#a5a58d" : "#336633")};
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  justify-content: center;
  align-self: center;
`;

export const Touchable = styled.TouchableOpacity`
  flex: 1;
  background-color: #fff;
  padding: 10px 0;
`;
