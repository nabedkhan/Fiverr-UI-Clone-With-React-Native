import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../../utils/colors";

const AppTitle = ({ title, style }) => {
  return <Text style={[styles.title, style]}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontFamily: "RobotoMedium",
    fontSize: 16,
    letterSpacing: 0.4,
  },
});

export default AppTitle;
