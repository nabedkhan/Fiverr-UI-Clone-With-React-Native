import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/inbox/ListItem";
import colors from "../utils/colors";

const messages = [
  {
    id: 1,
    title: "amirsadeghi",
    image:
      "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/91eacf0251ccc82cb4026fc2ad26f057-223119021557291931.175623/46E16F6D-E96C-42D9-BE07-DCEB4BEC4202",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, commodi.",
    lastUpdated: "April 25",
  },
  {
    id: 2,
    title: "amirsadeghi",
    image:
      "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/91eacf0251ccc82cb4026fc2ad26f057-223119021557291931.175623/46E16F6D-E96C-42D9-BE07-DCEB4BEC4202",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, commodi.",
    lastUpdated: "April 25",
  },
  {
    id: 3,
    title: "amirsadeghi",
    image:
      "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/91eacf0251ccc82cb4026fc2ad26f057-223119021557291931.175623/46E16F6D-E96C-42D9-BE07-DCEB4BEC4202",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, commodi.",
    lastUpdated: "April 25",
  },
];

const Inbox = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <ListItem item={item} />}
        style={{ paddingHorizontal: 15 }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
});

export default Inbox;
