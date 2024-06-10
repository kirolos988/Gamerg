/** @format */

import { View } from "react-native";
import Cards from "./screens/Cards";
import styles from "./AppStyling";

export default function App() {
  return (
    <View style={styles.container}>
      <Cards />
    </View>
  );
}
