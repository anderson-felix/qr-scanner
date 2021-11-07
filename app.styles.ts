import styled from "styled-components/native";

export const QRSection = styled.View`
  height: 40%;
  width: 95%;
  position: absolute;
  top: 25%;
  background-color: #4d4f5c;
  border-radius: 10px;

  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  padding: 16px;
`;

export const ConfirmContainer = styled.TouchableOpacity`
  height: 50px;
  width: 100px;
  border-radius: 10px;
  background-color: #bb3e03;

  justify-content: center;
  align-self: center;
`;

export const ConfirmButton = styled.Text`
  width: 100%;
  color: transparent;
  color: #fff;

  text-align: center;
  font-size: 22px;
`;

export const QRData = styled.Text`
  flex: 1;
  width: 100%;
  color: #fff;
  border: 1px solid #bb3e03;
  margin-bottom: 16px;

  text-align: center;
  font-size: 22px;
`;
