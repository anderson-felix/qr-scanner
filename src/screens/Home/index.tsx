import React from "react";

import { SvgCssUri } from "react-native-svg";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton";
import { NavigationChildrenType } from "../../shared/types/NavigationChildrenType";

import { LoginSection, Container } from "./styles";

const Home: NavigationChildrenType = ({ navigation }) => {
  return (
    <Container>
      <LoginSection>
        <SvgCssUri
          width="250"
          height="80"
          uri="https://picode-public.s3.amazonaws.com/picode-logo.svg"
        />
        <SvgCssUri
          width="250"
          height="100"
          uri="https://picode-public.s3.amazonaws.com/undraw_graduation_re_gthn.svg"
        />
        <PrimaryButton
          text="Entrar"
          onPress={() => navigation.navigate("Login")}
        />
      </LoginSection>
    </Container>
  );
};

export default Home;
