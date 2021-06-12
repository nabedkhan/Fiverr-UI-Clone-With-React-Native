import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import colors from "../../utils/colors";

const SectionListItem = ({ title }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      {title === "Show online status" ? (
        <Switch
          trackColor={{ false: "#767577", true: colors.light }}
          thumbColor={isEnabled ? colors.primary : colors.gray}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      ) : (
        <Entypo name="chevron-small-right" size={27} color={colors.gray} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  title: {
    fontFamily: "RobotoMedium",
  },
});

export default SectionListItem;
