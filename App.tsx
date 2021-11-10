import React, { useCallback, useState } from "react";
import { StatusBar, ViewStyle } from "react-native";
import { RNCamera } from "react-native-camera";
import IonIcons from "react-native-vector-icons/Ionicons";
import MCIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { SvgCssUri } from "react-native-svg";

import {
  ConfirmContainer,
  ConfirmButton,
  QRSection,
  QRData,
  SimpleButton,
  ButtonArea,
  Message,
  SafeArea,
  SvgArea,
} from "./app.styles";

const RNCameraStyle = {
  height: "50%",
  flexDirection: "row",
  maxHeight: 500,
  maxWidth: 500,
  overflow: "hidden",
  borderWidth: 3,
  borderStyle: "dashed",
  borderColor: "#fff",
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
      <StatusBar barStyle="dark-content" />

      <SvgArea>
        <SvgCssUri
          width="200"
          height="200"
          uri="https://picode-public.s3.amazonaws.com/picode-logo.svg"
        />
      </SvgArea>
      <SafeArea>
        <Message>Escaneie o código QR</Message>
        <RNCamera
          style={RNCameraStyle}
          onBarCodeRead={({ data }) => !read && onScan(data)}
          captureAudio={false}
          autoFocus="on"
          type={cameraOrientation === true ? "back" : "front"}
          flashMode={flashMode === true ? "torch" : "off"}
        />
      </SafeArea>

      <ButtonArea>
        <SimpleButton
          onPress={() => cameraOrientation && setFlashMode(!flashMode)}
        >
          {flashMode ? (
            <MCIcons name="flash-off" size={50} color="#fff" />
          ) : (
            <MCIcons name="flash" size={50} color="#fff" />
          )}
        </SimpleButton>
        <SimpleButton onPress={() => setCameraOrientation(!cameraOrientation)}>
          <IonIcons name="camera-reverse" size={50} color="#fff" />
        </SimpleButton>
      </ButtonArea>
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
