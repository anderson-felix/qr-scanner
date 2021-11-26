import styled from "styled-components/native";

interface ContentProps {
  disabled: boolean | undefined;
  backgroundColor?: string;
}

export const Button = styled.Text`
  font-size: 20px;
  font-family: "Nunito-Bold";
  color: #fff;
`;

export const Touchable = styled.TouchableHighlight`
  max-width: 150px;
  border-radius: 10px;
`;

export const Content = styled.View<ContentProps>`
  color: ${(props) => (props.disabled ? "#a5a58d" : "#fff")};
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor || "#6699FF"};
  border-radius: 10px;
  padding: 10px 20px;
`;
