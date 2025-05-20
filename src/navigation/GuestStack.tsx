import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "../screens/guest/Landing/Landing";
import Register from "../screens/guest/Register/Register";
import GuestHeader from "../components/GuestHeader/GuestHeader";
import Login from "../screens/guest/Login/Login";

export type GuestStackParamList = {
  Landing: undefined;
  Login: undefined;
  Register: undefined;
};

export const Stack = createNativeStackNavigator<GuestStackParamList>();

const GuestStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <GuestHeader />,
      }}
    >
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default GuestStack;
