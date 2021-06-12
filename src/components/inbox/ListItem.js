import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../../utils/colors";

const ListItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.sameColor}>{item.lastUpdated}</Text>
        </View>
        <Text style={styles.sameColor} numberOfLines={2}>
          {item.description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 40,
    marginRight: 10,
  },
  title: {
    fontSize: 15,
    fontFamily: "RobotoMedium",
  },
  sameColor: {
    color: colors.textLight,
  },
});

export default ListItem;
