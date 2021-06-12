import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../../utils/colors";

const ListItem = ({ item }) => {
  let style;
  if (item.title === "Personal balance") {
    style = {
      color: colors.primary,
    };
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={[styles.data, style]}>{item.data}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "50%",
  },
  data: {
    fontFamily: "RobotoMedium",
    fontSize: 18,
    paddingVertical: 5,
  },
  title: {
    fontSize: 13,
  },
});

export default ListItem;
