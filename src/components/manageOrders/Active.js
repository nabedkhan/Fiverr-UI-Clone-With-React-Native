import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../../utils/colors";

const image =
  "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/179360032/original/0545ae6148cf3f0ae8abc490f49f1ee998a8b31f.jpg";

const Active = () => (
  <View style={styles.container}>
    <View style={styles.gigContent}>
      <View style={{ flexDirection: "row", paddingBottom: 10 }}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={{ flex: 1 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.price}>$125</Text>
            <Text style={styles.offer}>Custom Offer</Text>
          </View>
          <Text style={{ fontFamily: "RobotoLight" }}>
            I will design the perfect logo for your business company
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingBottom: 10,
        }}
      >
        <View style={{ marginRight: 10 }}>
          <Image
            source={require("../../../assets/favicon.png")}
            style={styles.userImage}
          />
          <View style={styles.badge} />
        </View>
        <Text style={{ color: colors.light }}>nabedkhan05</Text>
      </View>

      <View style={styles.bottomArea}>
        <Text style={styles.date}>Nov 2, 2020</Text>
        <Text style={styles.revision}>IN REVISION</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  gigContent: {
    backgroundColor: colors.white,
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 10,
  },
  price: {
    fontFamily: "RobotoMedium",
    fontSize: 15,
  },
  bottomArea: {
    borderTopColor: colors.light,
    borderTopWidth: 0.5,
    paddingTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  offer: {
    color: colors.light,
    textTransform: "uppercase",
  },
  date: {
    fontFamily: "RobotoMedium",
  },
  revision: {
    fontSize: 11,
    color: colors.blue,
  },
  userImage: {
    width: 25,
    height: 25,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "#000000",
    position: "relative",
  },
  badge: {
    width: 10,
    height: 10,
    backgroundColor: colors.primary,
    borderRadius: 10,
    position: "absolute",
    left: 18,
    bottom: 0,
    zIndex: 1,
    borderWidth: 2,
    borderColor: colors.white,
  },
});

export default Active;
