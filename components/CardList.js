/** @format */

import { View, Text, FlatList } from "react-native";
import React from "react";
import data from "./Data";
import SingleCard from "./SingleCard";

const CardList = () => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(data) => data.id}
        renderItem={({ item }) => <SingleCard item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CardList;
