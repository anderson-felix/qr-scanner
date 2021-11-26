import { ViewStyle } from "react-native";
import styled from "styled-components/native";

export const ReactNativeCameraStyle = {
  height: "50%",
  flexDirection: "row",
  maxHeight: 500,
  maxWidth: 500,
  overflow: "hidden",
  borderWidth: 3,
  borderStyle: "dashed",
  borderColor: "#fff",
} as ViewStyle;

export const SafeArea = styled.SafeAreaView`
  height: 100%;
  flex-direction: column;
  justify-content: center;
  background-color: #4895ef;
  padding: 100px 50px;

  text-align: center;
  justify-content: flex-start;
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
  text-align: center;
  font-family: "Nunito-Bold";
`;
