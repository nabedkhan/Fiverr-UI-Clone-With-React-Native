import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../utils/colors";
import AppTitle from "../text/AppTitle";
import Accordion from "./accordion/Accordion";
import Option from "./Option";
import ProgressCircle from "./ProgressCircle";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleHeader}>
        <AppTitle title="Here's how you're doing" />
        <AntDesign name="questioncircleo" size={18} color={colors.white} />
      </View>

      <View style={styles.options}>
        <Option leftText="Seller level" rightText="New Seller" />
        <Option
          leftText="Next evaluation"
          rightText="Jun 15, 2021"
          style={{ color: colors.primary }}
        />
        <Option
          leftText="Response time"
          rightText="1 Hour"
          style={{ color: colors.primary }}
        />
      </View>

      <View style={styles.progress}>
        <ProgressCircle text="Response time" percentage={80} />
        <ProgressCircle text="Order completion" percentage={100} />
        <ProgressCircle text="On-time delivery" percentage={90} />
        <ProgressCircle text="Positive Rating" percentage={100} />
      </View>

      <View style={styles.accordion}>
        <Accordion />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingVertical: 10,
  },
  titleHeader: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  options: {
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  progress: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  accordion: {
    borderTopWidth: 0.5,
    borderTopColor: colors.border,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
});

export default Dashboard;
