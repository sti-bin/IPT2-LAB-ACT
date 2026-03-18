import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const Projects = () => {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-gray-100 px-6">
      
      <Text className="text-4xl font-extrabold mb-12 text-gray-800"
      style={{ fontFamily: 'Times New Roman' }}>
        My Projects
      </Text>

      <View className="flex-row flex-wrap justify-between w-full">

        <View className="items-center w-[48%] mb-6">
          <Text className="font-semibold mb-2 text-gray-500"
          style={{ fontFamily: 'Times New Roman' }}>
            Project 1
          </Text>
          <View className="w-full py-10 bg-white rounded-3xl shadow-md items-center justify-center">
            <Text className="text-lg font-bold text-gray-800"
            style={{ fontFamily: 'Times New Roman' }}>
              Weather System
            </Text>
          </View>
        </View>

        <View className="items-center w-[48%] mb-6">
          <Text className="font-semibold mb-2 text-gray-500"
          style={{ fontFamily: 'Times New Roman' }}>
            Project 2
          </Text>
          <View className="w-full py-10 bg-white rounded-3xl shadow-md items-center justify-center">
            <Text className="text-lg font-bold text-gray-800"
            style={{ fontFamily: 'Times New Roman' }}>
              Dumkin' E-Commerce Website
            </Text>
          </View>
        </View>

        <View className="items-center w-[48%] mb-6">
          <Text className="font-semibold mb-2 text-gray-500"
          style={{ fontFamily: 'Times New Roman' }}>
            Project 3
          </Text>
          <View className="w-full py-10 bg-white rounded-3xl shadow-md items-center justify-center">
            <Text className="text-lg font-bold text-gray-800"
            style={{ fontFamily: 'Times New Roman' }}>
              Quiz App
            </Text>
          </View>
        </View>

      </View>

      {/* Button */}
      <View className="mt-10">
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

export default Projects;
