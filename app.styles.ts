import styled from "styled-components/native";

export const SafeArea = styled.SafeAreaView`
  height: 100%;
  flex-direction: column;
  justify-content: center;
  background-color: #4895ef;
  padding: 100px 50px;

  text-align: center;
  justify-content: flex-start;
`;

export const SvgArea = styled.SafeAreaView`
  background-color: #fff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70px;
  position: relative;
`;

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

export const ButtonArea = styled.View`
  position: absolute;
  width: 100%;
  height: 60px;
  flex-direction: row;
  bottom: 50px;
  justify-content: space-around;
`;

export const SimpleButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  width: 60px;
  background-color: #4d4f5c;
  align-items: center;
  border-radius: 10px;
`;

export const Message = styled.Text`
  color: #fff;
  align-self: center;
  font-size: 22px;
  padding-bottom: 16px;
`;
