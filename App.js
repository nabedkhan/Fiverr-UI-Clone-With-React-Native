import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoLight: require("./assets/fonts/Roboto-Light.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
    RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
  });
  if (!fontsLoaded) return <AppLoading />;

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
