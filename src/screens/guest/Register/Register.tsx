import { View, Text } from "react-native";
import React from "react";
import { GuestStackParamList } from "../../../navigation/GuestStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RegisterScreenProps = NativeStackScreenProps<
  GuestStackParamList,
  "Register"
>;

const Register: React.FC<RegisterScreenProps> = () => {
  return (
    <View>
      <Text>Register</Text>
    </View>
  );
};

export default Register;
