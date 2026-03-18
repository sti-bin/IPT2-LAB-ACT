import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const Skill = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-gray-100 items-center justify-center px-6">
      
      <Text
    className="text-4xl font-extrabold mb-12 text-gray-800"
    style={{ fontFamily: 'Times New Roman' }}>
        My Skills
      </Text>

      <View className="flex-row flex-wrap justify-center gap-4 w-full">

        <View className="bg-white rounded-2xl px-6 py-4 shadow-md">
          <Text className="font-semibold text-lg text-gray-800"
          style={{ fontFamily: 'Times New Roman' }}>HTML</Text>
        </View>

        <View className="bg-white rounded-2xl px-6 py-4 shadow-md">
          <Text className="font-semibold text-lg text-gray-800"
          style={{ fontFamily: 'Times New Roman' }}>CSS</Text>
        </View>

        <View className="bg-white rounded-2xl px-6 py-4 shadow-md">
          <Text className="font-semibold text-lg text-gray-800"
          style={{ fontFamily: 'Times New Roman' }}>Writing</Text>
        </View>

        <View className="bg-white rounded-2xl px-6 py-4 shadow-md">
          <Text className="font-semibold text-lg text-gray-800"
          style={{ fontFamily: 'Times New Roman' }}>UI/UX</Text>
        </View>

        <View className="bg-white rounded-2xl px-6 py-4 shadow-md">
          <Text className="font-semibold text-lg text-gray-800"
          style={{ fontFamily: 'Times New Roman' }}>Figma Designs</Text>
        </View>

      </View>

      <View className="mt-16">
        <Pressable
          className="bg-green-600 px-8 py-3 rounded-full shadow-md active:opacity-80"
          onPress={() => router.dismissTo("/")}
        >
          <Text className="text-white text-lg font-semibold"
          style={{ fontFamily: 'Times New Roman' }}>
            Go Back
          </Text>
        </Pressable>
      </View>

    </View>
  );
};

export default Skill;
