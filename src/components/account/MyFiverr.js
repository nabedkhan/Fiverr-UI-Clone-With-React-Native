import React from "react";
import { SectionList, StyleSheet, Text } from "react-native";
import SectionListItem from "./SectionListItem";

const DATA = [
  {
    title: "My Fiverr",
    data: [
      "Earnings",
      "Buyer requests",
      "Custom offer templates",
      "Share Gigs",
      "My Profile",
      "Manage Gigs",
    ],
  },
  {
    title: "General",
    data: [
      "Settings",
      "Show online status",
      "Payments",
      "Invite friends",
      "Support",
    ],
  },
];

const MyFiverr = () => {
  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <SectionListItem title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    fontFamily: "RobotoMedium",
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});

export default MyFiverr;
