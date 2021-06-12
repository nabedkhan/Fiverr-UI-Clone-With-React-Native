import React from "react";
import { StatusBar, View } from "react-native";

const ScreenView = ({ children }) => {
  return (
    <View
      style={{
        paddingTop: StatusBar.currentHeight,
      }}
    >
      {children}
    </View>
  );
};

export default ScreenView;
