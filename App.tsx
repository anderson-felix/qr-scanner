import React from "react";
import { Appearance } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Mainscreen from "./src/screens/Mainscreen";
import globalStyle from "./src/shared/styles/global";

const Stack = createStackNavigator();

const StackStyle = {
  headerTitleAlign: "center",
  headerTintColor: globalStyle.text,
} as unknown as StackNavigationProp<any>;

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            ...StackStyle,
            title: "PiCode Education",
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            ...StackStyle,
            title: "Escaneie seu código",
          }}
        />
        <Stack.Screen
          name="Mainscreen"
          component={Mainscreen}
          options={{
            ...StackStyle,
            title: "Página inicial",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
