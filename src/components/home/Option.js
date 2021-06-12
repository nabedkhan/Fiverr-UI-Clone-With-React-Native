import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../utils/colors";

const Option = ({ leftText, rightText, style }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{leftText}</Text>
      <Text style={[styles.text, { fontFamily: "RobotoMedium" }, style]}>
        {rightText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  text: {
    color: colors.white,
  },
});

export default Option;
