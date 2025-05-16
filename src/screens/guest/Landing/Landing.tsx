import { View, Text } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { GuestStackParamList } from "../../../navigation/GuestStack";

type LandingScreenProps = NativeStackScreenProps<
  GuestStackParamList,
  "Landing"
>;

const Landing: React.FC<LandingScreenProps> = () => {
  return (
    <View>
      <Text>Landing</Text>
    </View>
  );
};

export default Landing;
