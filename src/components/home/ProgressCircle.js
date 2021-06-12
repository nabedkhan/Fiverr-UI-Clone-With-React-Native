import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import colors from "../../utils/colors";

const ProgressCircle = ({ text, percentage = 0 }) => {
  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={60}
        width={2}
        fill={percentage}
        tintColor={percentage >= 90 ? colors.primary : colors.danger}
        backgroundColor={colors.light}
        style={{ alignSelf: "center" }}
      >
        {() => <Text style={{ color: colors.white }}>{percentage}%</Text>}
      </AnimatedCircularProgress>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    color: colors.white,
    paddingTop: 5,
    width: "80%",
    textAlign: "center",
    alignSelf: "center",
  },
});

export default ProgressCircle;
