import * as yup from "yup";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";
import { GuestStackParamList } from "../../../navigation/GuestStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import Input from "../../../components/Input/Input";

type LoginScreenProps = NativeStackScreenProps<GuestStackParamList, "Login">;

const loginSchema = yup.object().shape({
  email: yup.string().required("Email Required").email("Invalid Email"),
  password: yup.string().required("Password Required"),
});

type UserLoginForm = {
  email: string;
  password: string;
};

const Login: React.FC<LoginScreenProps> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLoginForm>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: UserLoginForm) => {
    console.log(data);
  };

  return (
    <View className="px-8 gap-5">
      <Text className="text-customBlack text-4xl w-full font-bold">
        Sign in
      </Text>
      <TouchableOpacity className="flex-row w-full rounded-full border p-2 gap-4 border-gray-700 items-center justify-center">
        <Image
          source={require("../../../../assets/GoogleLogo.png")}
          style={{
            width: 25,
            height: 25,
            resizeMode: "contain",
          }}
        />
        <Text className="text-customBlack">Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-row w-full rounded-full border p-2 gap-4 border-gray-700 items-center justify-center">
        <Image
          source={require("../../../../assets/AppleLogo.png")}
          style={{
            width: 25,
            height: 25,
            resizeMode: "contain",
          }}
        />
        <Text className="text-customBlack">Sign in with Apple</Text>
      </TouchableOpacity>
      <View className="flex-row items-center mt-6">
        <View className="border border-gray-300 w-12 h-[1px] flex-1" />
        <Text className="mx-6">or</Text>
        <View className="border border-gray-300 w-12 h-[1px] flex-1" />
      </View>
      <View>
        <Input
          control={control}
          displayName="Email"
          fieldName="email"
          error={errors.email}
        />
        <Input
          control={control}
          displayName="Password"
          fieldName="password"
          error={errors.password}
        />
        <TouchableOpacity>
          <Text className="font-bold text-primary text-lg">
            Forgor Password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          className="bg-primary h-14 mt-4 w-full rounded-full items-center justify-center"
        >
          <Text className="text-white font-bold text-xl">Sign In</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row w-full justify-center gap-4 mt-4">
        <Text className="text-lg">New to Linkedin?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text className="text-primary font-bold text-lg">Join now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
