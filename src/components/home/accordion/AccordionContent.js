import React from "react";
import { View } from "react-native";
import ContentItem from "./ContentItem";

const AccordionContent = ({ content }) => {
  return (
    <View style={{ paddingTop: 5 }}>
      {content.map((item, index) => (
        <ContentItem item={item} key={item.heading} index={index} />
      ))}
    </View>
  );
};

export default AccordionContent;
