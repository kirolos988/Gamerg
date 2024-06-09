import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import CardList from "../components/CardList";

const Cards = () => {
  return (
    <SafeAreaView>
      <Text>Cards</Text>
      <CardList />
    </SafeAreaView>
  );
};

export default Cards;
