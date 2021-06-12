import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../../utils/colors";
import AppTitle from "../../text/AppTitle";
import ListItem from "./ListItem";

const DATA = [
  {
    title: "Personal balance",
    data: "$3000",
  },
  {
    title: "Earnings in June 2016",
    data: "$1000",
  },
  {
    title: "Avg. selling price",
    data: "$110",
  },
  {
    title: "Active orders",
    data: "6 ($530)",
  },
  {
    title: "Pending clearance",
    data: "$670",
  },
  {
    title: "Cancelled orders",
    data: "2 ($130)",
  },
];

const Earning = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <AppTitle title="Earnings" style={styles.title} />
        <Text style={styles.details}>Details</Text>
      </View>

      <View style={styles.listArea}>
        {DATA.map((item) => (
          <ListItem item={item} key={item.title} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  title: {
    color: colors.secondary,
    fontSize: 18,
  },
  details: {
    color: colors.primary,
  },
  listArea: {
    elevation: 2,
    backgroundColor: colors.white,
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default Earning;
