/** @format */

import { StyleSheet, View } from "react-native";
import Cards from "./screens/Cards";

export default function App() {
  return (
    <View style={styles.container}>
      <Cards />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d102d",
    alignItems: "center",
    justifyContent: "center",
  },
});
