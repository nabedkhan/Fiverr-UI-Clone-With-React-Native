import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../utils/colors";

const ListItemSeparator = () => <View style={styles.itemSeparator} />;

const styles = StyleSheet.create({
  itemSeparator: {
    borderBottomColor: colors.border,
    borderBottomWidth: 0.3,
    paddingTop: 10,
  },
});

export default ListItemSeparator;
