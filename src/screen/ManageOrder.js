import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import Active from "../components/manageOrders/Active";
import colors from "../utils/colors";

const Revision = () => <View style={{ flex: 1, backgroundColor: colors.bg }} />;

const Waiting = () => <View style={{ flex: 1, backgroundColor: colors.bg }} />;

const Completed = () => (
  <View style={{ flex: 1, backgroundColor: colors.bg }} />
);

const Cancelled = () => (
  <View style={{ flex: 1, backgroundColor: colors.bg }} />
);

const renderTabBar = (props) => (
  <TabBar
    {...props}
    tabStyle={{ width: "auto" }}
    activeColor={colors.primary}
    inactiveColor={colors.secondary}
    scrollEnabled={true}
    indicatorStyle={{ backgroundColor: colors.primary }}
    style={{ backgroundColor: colors.white }}
    labelStyle={{ textTransform: "capitalize" }}
  />
);

const ManageOrder = () => {
  const initialLayout = { width: Dimensions.get("window").width };

  const [index, setIndex] = React.useState(0);
  const [routes] = useState([
    { key: "active", title: "Active" },
    { key: "revision", title: "Revision Requested" },
    { key: "waiting", title: "Waiting For Details" },
    { key: "completed", title: "Completed" },
    { key: "cancelled", title: "Cancelled" },
  ]);

  const renderScene = SceneMap({
    active: Active,
    revision: Revision,
    waiting: Waiting,
    completed: Completed,
    cancelled: Cancelled,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
  scene: {
    flex: 1,
  },
});

export default ManageOrder;
