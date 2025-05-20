import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import * as yup from "yup";
import { GuestStackParamList } from "../../../navigation/GuestStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { User, UserRegisterData } from "../../../types/common";
import Input from "../../../components/Input/Input";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getAllUsers, registerUser } from "../../../services/authorization";

type RegisterScreenProps = NativeStackScreenProps<
  GuestStackParamList,
  "Register"
>;

const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("First Name is required")
    .matches(/^[A-Za-z\s]+$/, "Only Letters"),
  email: yup.string().required("Email Required").email("Invalid Email"),
  password: yup
    .string()
    .required("Password Required")
    .min(8, "Minimum 8 Letters"),
  passwordConfirmation: yup
    .string()
    .required("Password Confirmation Required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

const Register: React.FC<RegisterScreenProps> = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegisterData>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data: UserRegisterData) => {
    console.log(data);
  };

  const fields = Object.entries(registerSchema.fields);

  return (
    <View className="px-8 gap-5">
      <Text className="text-customBlack text-2xl w-full text-center font-semibold">
        Join LinkedIn now — it’s free!
      </Text>
      <View>
        {fields.map(([name, options]) => {
          const fieldName = name as keyof UserRegisterData;
          return (
            <Input
              key={name}
              control={control}
              displayName={name[0].toUpperCase() + name.slice(1)}
              fieldName={name}
              error={errors[fieldName]}
            />
          );
        })}
      </View>
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        className="bg-primary h-14 mt-4 w-full rounded-full items-center justify-center"
      >
        <Text className="text-white font-bold text-xl">Continue</Text>
      </TouchableOpacity>
      <View className="flex-row items-center mt-6">
        <View className="border border-gray-300 w-12 h-[1px] flex-1" />
        <Text className="mx-6">or</Text>
        <View className="border border-gray-300 w-12 h-[1px] flex-1" />
      </View>
      <TouchableOpacity className="flex-row w-full mt-3 rounded-full border p-2 gap-4 border-gray-700 items-center justify-center">
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
    </View>
  );
};

export default Register;
