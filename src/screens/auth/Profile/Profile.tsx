import { View, Text } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../../navigation/AuthStack";

type ProfileScreenProps = NativeStackScreenProps<AuthStackParamList, "Profile">;

const Profile: React.FC<ProfileScreenProps> = () => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
