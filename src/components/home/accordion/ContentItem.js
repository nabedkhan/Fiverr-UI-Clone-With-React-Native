import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../../utils/colors";
import ListItemSeparator from "../../ListItemSeparator";

const ContentItem = ({ item, index }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.heading}>{item.heading}</Text>
        <Text style={styles.points}>{item.points}</Text>
      </View>
      <Text style={styles.description}>{item.description}</Text>
      {index !== 3 && <ListItemSeparator />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  heading: {
    color: colors.white,
    fontFamily: "RobotoMedium",
  },
  points: {
    color: colors.primary,
    fontFamily: "RobotoMedium",
  },
  description: {
    color: colors.textLight,
    width: "73%",
  },
});

export default ContentItem;
