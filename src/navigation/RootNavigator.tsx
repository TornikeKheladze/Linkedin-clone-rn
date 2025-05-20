import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import GuestStack from "./GuestStack";
import AuthStack from "./AuthStack";

const RootNavigator = () => {
  return (
    <NavigationContainer>
      {false ? <AuthStack /> : <GuestStack />}
    </NavigationContainer>
  );
};

export default RootNavigator;
