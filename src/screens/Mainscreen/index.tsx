import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FAIcons from "react-native-vector-icons/FontAwesome";
import EIcons from "react-native-vector-icons/Entypo";

import { Message, SafeArea } from "./styles";
import { NavigationChildrenType } from "../../shared/types/NavigationChildrenType";
import globalStyle from "../../shared/styles/global";

const Tab = createBottomTabNavigator();
const MainScreen: NavigationChildrenType = ({ route }) => (
  <Tab.Navigator>
    <Tab.Screen
      name="HomePage"
      options={{
        title: "Página inicial",
        tabBarIcon: () => (
          <FAIcons name="home" size={30} color={globalStyle.text} />
        ),
        headerTintColor: globalStyle.text,
        headerStyle: {
          opacity: 0,
          height: 0,
        },
      }}
      component={MainScreenComponent}
      initialParams={{ name: route.params?.name, code: route.params?.code }}
    />
    <Tab.Screen
      name="HomePage2"
      options={{
        title: "Outra página",
        tabBarIcon: () => (
          <EIcons name="folder-video" size={25} color={globalStyle.text} />
        ),
        headerStyle: {
          opacity: 0,
          height: 0,
        },
      }}
      component={MainScreenComponent2}
      initialParams={{ name: route.params?.name, code: route.params?.code }}
    />
  </Tab.Navigator>
);

const MainScreenComponent: NavigationChildrenType = ({ route }) => {
  return (
    <SafeArea>
      <Message>Olá {route.params?.name} Você está logado!</Message>
      <Message>Seu código é {route.params?.code}</Message>
    </SafeArea>
  );
};

const MainScreenComponent2: NavigationChildrenType = ({ route }) => {
  return (
    <SafeArea>
      <Message>Eai {route.params?.name}, bora descansar!</Message>
      <Message>JÁ DEU POR HOJE!</Message>
    </SafeArea>
  );
};

export default MainScreen;
