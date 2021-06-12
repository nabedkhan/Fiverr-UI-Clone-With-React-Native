import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Account from "../screen/Account";

const AccountNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Account} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
