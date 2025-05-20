import { Text, Image, TouchableOpacity, View, Platform } from "react-native";
import React from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { GuestStackParamList } from "../../navigation/GuestStack";

const isIos = Platform.OS === "ios";

const GuestHeader = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<GuestStackParamList>>();
  const route = useRoute<RouteProp<GuestStackParamList>>();

  return (
    <View
      className={`h-32 px-4 py-3 flex-row justify-between items-center w-full ${
        isIos && "pt-14"
      }`}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Landing")}>
        <Image
          source={require("../../../assets/linkedin-logo.png")}
          style={{
            width: 102,
            height: 25,
            resizeMode: "contain",
          }}
        />
      </TouchableOpacity>

      {route.name === "Landing" && (
        <>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text className="text-xl font-semibold text-customBlack">
              Join now
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            className=" rounded-full border h-12 w-24 border-primary items-center justify-center"
          >
            <Text className="text-primary font-semibold">Sign in</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default GuestHeader;
