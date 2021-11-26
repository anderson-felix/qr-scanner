import React, { useCallback, useState } from "react";
import { RNCamera } from "react-native-camera";
import IonIcons from "react-native-vector-icons/Ionicons";
import MCIcons from "react-native-vector-icons/MaterialCommunityIcons";

import {
  SimpleButton,
  ButtonArea,
  Message,
  SafeArea,
  ReactNativeCameraStyle,
} from "./styles";
import { NavigationChildrenType } from "../../shared/types/NavigationChildrenType";

const Login: NavigationChildrenType = ({ navigation }) => {
  const [cameraOrientation, setCameraOrientation] = useState(true);
  const [flashMode, setFlashMode] = useState(false);
  const [scanned, setScanned] = useState(false);

  const onScan = useCallback(
    (data: string) => {
      const requestData = {
        code: data,
        name: "Anderson",
      };
      setScanned(true);
      navigation.navigate("Mainscreen", { ...requestData });
      navigation.setOptions({ title: `Olá, ${requestData.name}.` });
    },
    [navigation]
  );

  return (
    <>
      <SafeArea>
        <Message>Aponte a câmera para seu crachá</Message>
        <RNCamera
          style={ReactNativeCameraStyle}
          onBarCodeRead={({ data }) => !scanned && onScan(data)}
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
          {flashMode || cameraOrientation === false ? (
            <MCIcons name="flash-off" size={50} color="#fff" />
          ) : (
            <MCIcons name="flash" size={50} color="#fff" />
          )}
        </SimpleButton>
        <SimpleButton onPress={() => setCameraOrientation(!cameraOrientation)}>
          <IonIcons name="camera-reverse" size={50} color="#fff" />
        </SimpleButton>
      </ButtonArea>
    </>
  );
};

export default Login;
