import { Control, Controller, FieldError } from "react-hook-form";
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";

type InputProps = {
  fieldName: string;
  error?: FieldError;
  control: Control<any>;
  displayName: string;
  props?: TextInputProps;
};

const Input: React.FC<InputProps> = ({
  fieldName,
  displayName,
  error,
  control,
  props,
}) => {
  const [isHidden, setIsHidden] = useState(true);
  const isPasswordInput =
    fieldName.includes("password") || fieldName.includes("Password");

  return (
    <View className="w-full ">
      <Text className="mb-2 text-[20px]">{displayName}</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="h-14 rounded-md border border-gray-700 pl-2 pr-10"
            onBlur={onBlur}
            onChangeText={onChange}
            value={String(value)}
            secureTextEntry={isPasswordInput ? isHidden : false}
            placeholder={displayName}
            {...props}
          />
        )}
        name={fieldName}
        defaultValue=""
      />
      {isPasswordInput && (
        <TouchableOpacity
          onPress={() => setIsHidden(!isHidden)}
          className="absolute right-3 top-[46px]"
        >
          <Feather name={isHidden ? "eye-off" : "eye"} size={20} />
        </TouchableOpacity>
      )}
      <Text
        className={`text-red-500 text-sm ${
          error ? "opacity-100" : "opacity-0"
        }`}
      >
        {error?.message}
      </Text>
    </View>
  );
};

export default Input;
