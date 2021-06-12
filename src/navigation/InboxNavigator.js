import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Inbox from "../screen/Inbox";
import HeaderLeft from "./screenOptions/HeaderLeft";
import HeaderRight from "./screenOptions/HeaderRight";

const HomeNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Inbox"
        component={Inbox}
        options={{
          headerTitle: () => <HeaderLeft title="Inbox" />,
          headerRight: () => <HeaderRight icon="sort-ascending" />,
          headerRightContainerStyle: {
            paddingRight: 10,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
