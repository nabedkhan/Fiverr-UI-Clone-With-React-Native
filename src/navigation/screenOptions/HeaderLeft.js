import React from "react";
import { StyleSheet, Text } from "react-native";

const HeaderLeft = ({ title = "Title" }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
  },
});

export default HeaderLeft;
