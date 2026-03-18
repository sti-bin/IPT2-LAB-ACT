import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center bg-gray-300 px-6">

      <Image
        className="rounded-full"
        source={require("../assets/images/tatlo.png")} 
        style={{ width: 170, height: 170 }} 
      />
      
      <Text className="font-bold text-3xl text-center mt-6"
      style={{ fontFamily: 'Times New Roman' }}>
        Mark Steven Alcovindas
      </Text>
      
      <Text className="text-gray-600 text-lg text-center mt-1"
      style={{ fontFamily: 'Times New Roman' }}>
        UI/UX Designer
      </Text>

      <View className="flex-row justify-center items-center mt-10 gap-4">

        <Pressable
          className="bg-green-800 rounded-full px-6 py-3 shadow-lg"
          onPress={() => router.push("/projects")}
        >
          <Text className="text-white text-sm"
          style={{ fontFamily: 'Times New Roman' }}>
            View My Projects
          </Text>
        </Pressable>

        <Pressable
          className="bg-white rounded-full px-6 py-3 shadow-lg"
          onPress={() => router.push("/skill")}
        >
          <Text className="text-black text-sm"
          style={{ fontFamily: 'Times New Roman' }}>
            My Skills
          </Text>
        </Pressable>

      </View>
    </View>
  );
}
