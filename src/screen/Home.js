import React from "react";
import { ScrollView } from "react-native";
import Dashboard from "../components/home/Dashboard";
import Earning from "../components/home/earnings/Earning";
import MyGig from "../components/home/gigs/MyGig";
import Todo from "../components/home/todos/Todo";

const Home = () => {
  return (
    <ScrollView>
      <Dashboard />
      <Earning />
      <Todo />
      <MyGig />
    </ScrollView>
  );
};

export default Home;
