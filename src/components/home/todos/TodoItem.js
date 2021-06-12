import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../../utils/colors";
import ListItemSeparator from "../../ListItemSeparator";

const TodoItem = ({ item, index }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textArea}>
        <Text style={styles.heading}>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
      <View style={{ width: "15%" }}>
        <Text style={styles.value}>{item.value}</Text>
      </View>
      {index !== 1 && <ListItemSeparator />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
  },
  textArea: {
    width: "80%",
    marginRight: 10,
  },
  heading: {
    fontFamily: "RobotoMedium",
  },
  value: {
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 2,
    borderRadius: 40,
    color: colors.textLight,
    borderColor: colors.textLight,
    textAlign: "center",
  },
});

export default TodoItem;
