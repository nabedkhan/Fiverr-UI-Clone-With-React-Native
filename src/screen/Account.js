import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, StatusBar, StyleSheet, Switch, Text, View } from "react-native";
import MyFiverr from "../components/account/MyFiverr";
import colors from "../utils/colors";

const Account = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerArea}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ marginRight: 10 }}>
              <Image
                source={{
                  uri: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/b1952ab5d22a624e62f00292330c6a73-604593971607800339488/JPEG_20201213_011213_141257794997166789.jpg",
                }}
                style={styles.image}
              />
              <View style={styles.badge} />
            </View>
            <View>
              <Text style={styles.username}>nabedkhan05</Text>
              <Text style={{ color: colors.white }}>
                Personal balance: $0.00
              </Text>
            </View>
          </View>

          <Feather name="bell" size={27} color={colors.white} />
          <View style={styles.sellerModeArea}>
            <Text style={styles.sellerMode}>Seller mode</Text>
            <Switch
              trackColor={{ false: "#767577", true: colors.light }}
              thumbColor={isEnabled ? colors.primary : colors.gray}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>

        <View style={{ paddingTop: 40, flex: 1 }}>
          <MyFiverr />
        </View>
      </View>
      <StatusBar barStyle="light-content" backgroundColor={colors.secondary} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bg,
    flex: 1,
  },
  headerArea: {
    backgroundColor: colors.secondary,
    paddingTop: 40,
    paddingBottom: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  badge: {
    width: 14,
    height: 14,
    backgroundColor: colors.primary,
    borderRadius: 10,
    position: "absolute",
    right: 0,
    bottom: 0,
    zIndex: 1,
    borderWidth: 2,
    borderColor: colors.secondary,
  },
  username: {
    color: colors.white,
    fontFamily: "RobotoMedium",
    fontSize: 18,
  },
  sellerMode: {
    fontFamily: "RobotoMedium",
    fontSize: 15,
  },
  sellerModeArea: {
    backgroundColor: colors.white,
    elevation: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 7,
    position: "absolute",
    width: "100%",
    left: -10,
    bottom: -50,
  },
});

export default Account;
