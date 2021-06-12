import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../../utils/colors";

const HeaderRight = ({ icon }) => {
  if (icon) {
    return <MaterialCommunityIcons name={icon} size={24} color="black" />;
  }
  return (
    <>
      <Image
        source={{
          uri: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/b1952ab5d22a624e62f00292330c6a73-604593971607800339488/JPEG_20201213_011213_141257794997166789.jpg",
        }}
        style={styles.container}
      />
      <View style={styles.badge} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  badge: {
    width: 12,
    height: 12,
    backgroundColor: colors.primary,
    borderRadius: 10,
    position: "absolute",
    right: 8,
    bottom: 11,
    zIndex: 1,
    borderWidth: 2,
    borderColor: colors.white,
  },
});

export default HeaderRight;
