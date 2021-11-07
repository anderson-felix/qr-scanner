/* eslint-disable react-native/no-inline-styles */

import React, { useCallback, useState } from "react";
import {
  SafeAreaView,
  Alert,
  View,
  StatusBar,
  ViewStyle,
  Text,
} from "react-native";
import { RNCamera } from "react-native-camera";
import {
  ConfirmContainer,
  ConfirmButton,
  QRSection,
  QRData,
} from "./app.styles";

import { PrimaryButton } from "./src/components/Buttons/PrimaryButton";

const RNCameraStyle = {
  height: "100%",
  flexDirection: "row",
} as ViewStyle;

const App = () => {
  const [cameraOrientation, setCameraOrientation] = useState(false);
  const [flashMode, setFlashMode] = useState(false);
  const [QRCode, setQRCode] = useState("");
  const [read, setRead] = useState(false);

  const onScan = useCallback((data: string) => {
    setRead(true);
    setQRCode(data);
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <PrimaryButton
            disabled={!cameraOrientation}
            onPress={() => cameraOrientation && setFlashMode(!flashMode)}
            text={`${flashMode ? "Desligar" : "Ligar"} flash`}
          />
          <View style={{ width: 3, backgroundColor: "#336633" }} />
          <PrimaryButton
            onPress={() => setCameraOrientation(!cameraOrientation)}
            text={`Câmera ${cameraOrientation ? "frontal" : "traseira"}`}
          />
        </View>
        <RNCamera
          style={RNCameraStyle}
          onBarCodeRead={({ data }) => !read && onScan(data)}
          captureAudio={false}
          autoFocus="on"
          type={cameraOrientation === true ? "back" : "front"}
          flashMode={flashMode === true ? "torch" : "off"}
        />
      </SafeAreaView>
      {read && (
        <QRSection>
          <QRData>{QRCode}</QRData>
          <ConfirmContainer onPress={() => setRead(false)}>
            <ConfirmButton>OK</ConfirmButton>
          </ConfirmContainer>
        </QRSection>
      )}
    </>
  );
};

export default App;
