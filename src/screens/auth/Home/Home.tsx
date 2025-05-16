import { View, Text } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../../navigation/AuthStack";

type HomeScreenProps = NativeStackScreenProps<AuthStackParamList, "Home">;

const Home: React.FC<HomeScreenProps> = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
