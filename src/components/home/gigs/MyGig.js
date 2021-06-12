import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../../utils/colors";
import AppTitle from "../../text/AppTitle";
import GigListItem from "./GigListItem";

const DATA = [
  {
    title: "Statistics",
    value: "Last 7 days",
    icon: false,
  },
  {
    title: "Impression",
    value: "30K",
    icon: true,
  },
  {
    title: "Clicks",
    value: "908",
    icon: true,
  },
];

const MyGig = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <AppTitle title="My Gigs" style={styles.title} />
      </View>

      <View style={styles.listArea}>
        {DATA.map((item, index) => (
          <GigListItem item={item} key={item.title} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginBottom: 10,
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
    paddingBottom: 20,
  },
});

export default MyGig;
