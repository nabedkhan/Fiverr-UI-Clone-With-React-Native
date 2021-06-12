import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import { View } from "react-native";
import colors from "../../../utils/colors";
import AppTitle from "../../text/AppTitle";

const AccordionHeader = ({ section, showDownIcon }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <AppTitle title={section.title} />
      {showDownIcon ? (
        <Entypo name="chevron-up" size={24} color={colors.border} />
      ) : (
        <Entypo name="chevron-down" size={24} color={colors.border} />
      )}
    </View>
  );
};
export default AccordionHeader;
