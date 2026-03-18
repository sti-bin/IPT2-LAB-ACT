import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="skill" options={{ headerShown: false }} />
      <Stack.Screen name="projects" options={{ headerShown: false }} />
    </Stack>
  );
}
