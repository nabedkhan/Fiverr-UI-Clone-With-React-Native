import {
  AntDesign,
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import colors from "../utils/colors";
import AccountNavigator from "./AccountNavigator";
import HomeNavigator from "./HomeNavigator";
import InboxNavigator from "./InboxNavigator";
import ManageOrdersNavigator from "./ManageOrdersNavigator";

const AppNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        activeTintColor: colors.primary,
        inactiveTintColor: colors.secondary,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={InboxNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="mail" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ManageOrders"
        component={ManageOrdersNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="clipboard-list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
