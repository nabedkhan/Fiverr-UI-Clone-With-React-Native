import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../../utils/colors";

const GigListItem = ({ item }) => {
  const valueStyle = item.title === "Statistics" && {
    color: colors.textLight,
    fontFamily: "Roboto",
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{item.title}</Text>
      <Text style={[styles.value, valueStyle]}>
        {item.value}
        {"  "}
        {item.icon && (
          <FontAwesome name="arrow-up" size={11} color={colors.primary} />
        )}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 3,
  },
  value: {
    fontFamily: "RobotoMedium",
    color: colors.secondary,
  },
});

export default GigListItem;
