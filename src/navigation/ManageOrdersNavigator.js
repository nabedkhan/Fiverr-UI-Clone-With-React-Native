import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ManageOrder from "../screen/ManageOrder";
import HeaderLeft from "./screenOptions/HeaderLeft";
import HeaderRight from "./screenOptions/HeaderRight";

const ManageOrdersNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ManageOrder"
        component={ManageOrder}
        options={{
          headerTitle: () => <HeaderLeft title="Manage Orders" />,
          headerRight: () => <HeaderRight icon="sort-variant" />,
          headerRightContainerStyle: {
            paddingRight: 10,
          },
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default ManageOrdersNavigator;
