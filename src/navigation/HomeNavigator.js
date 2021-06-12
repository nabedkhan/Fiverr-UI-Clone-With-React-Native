import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../screen/Home";
import HeaderLeft from "./screenOptions/HeaderLeft";
import HeaderRight from "./screenOptions/HeaderRight";

const HomeNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <HeaderLeft title="nabedkhan05" />,
          headerRight: () => <HeaderRight />,
          headerRightContainerStyle: {
            paddingRight: 10,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
