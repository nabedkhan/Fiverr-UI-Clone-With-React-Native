import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../../utils/colors";
import AppTitle from "../../text/AppTitle";
import TodoItem from "./TodoItem";

const DATA = [
  {
    title: "0 unread messages",
    description: "Your response time is good. Keep up the great work!",
    value: 0,
  },
  {
    title: "Revision request",
    description: "See what the buyer is asking to change",
    value: 0,
  },
];

const Todo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <AppTitle title="To-Dos" style={styles.title} />
      </View>

      <View style={styles.listArea}>
        {DATA.map((item, index) => (
          <TodoItem item={item} key={item.title} index={index} />
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
    paddingBottom: 20,
    flex: 1,
  },
});

export default Todo;
