import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "../screens/guest/Landing/Landing";
import Register from "../screens/guest/Register/Register";

export type GuestStackParamList = {
  Landing: undefined;
  Login: undefined;
  Register: undefined;
};

export const Stack = createNativeStackNavigator<GuestStackParamList>();

const GuestStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default GuestStack;
