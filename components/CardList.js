import { View, Text,FlatList } from "react-native";
import React from "react";
import data from "./Data";

const CardList = () => {
  return (
    <View>
      <Text>{data[0].id}</Text>
      <FlatList
        data={data}
        keyExtractor={data => data.id}
        renderItem={({item}) => <Text>{item.duration}</Text>}
      />
    </View>
  );
};

export default CardList;
