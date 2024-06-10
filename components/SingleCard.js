/** @format */

import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import IonIcon from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const { width, height } = Dimensions.get("screen");

const SingleCard = ({ item }) => {
  return (
    <ImageBackground
      borderRadius={30}
      source={item.img}
      imageStyle={styles.imageStyle}
      style={styles.backgroundImg}
    >
      <View style={styles.overlay}>
        <View style={styles.view1}>
          <Image source={item.logo} resizeMode='contain' style={styles.logo} />
          <Text style={styles.tournamentName}>{item.tournamentName}</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.dateAndId}>{item.date}</Text>
          <Text style={styles.dateAndId}>ID: {item.id}</Text>
        </View>
        <View style={styles.view3}>
          <TouchableOpacity>
            <AntDesignIcon name='infocirlceo' size={24} color={"#ffffff"} />
          </TouchableOpacity>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.prize}>
            <Text style={{ fontSize: 42 }}>Prize</Text>
            {"\n"}Per Bracket
          </Text>
        </View>
        <View style={styles.view4}>
          <View>
            <Text style={styles.titles}>Scoring</Text>
            <View style={styles.box}>
              <MaterialIcon
                name='videogame-asset'
                size={32}
                color={"#000000"}
              />
              <Text>{item.scoring}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.titles}>Bracket</Text>
            <View style={styles.box}>
              <IonIcon name='people-sharp' size={32} color={"#000000"} />
              <Text>{item.bracket}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.titles}>Duration</Text>
            <View style={styles.box}>
              <MaterialIcon name='access-alarms' size={32} color={"#000000"} />
              <Text>{item.duration}</Text>
            </View>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.view5}>
          <View style={styles.fee}>
            <Text style={styles.feeTitle}>Entry Fee</Text>
            <Text style={styles.feeText}>{item.entryFee}</Text>
          </View>
          <View style={styles.timeLeft}>
            <MaterialCommunityIcons name='clock' size={20} />
            <Text style={styles.timeLeftText}>{item.timeLeft}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Join Tournament</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    flex: 1,
    resizeMode: "cover",
    borderWidth: 1,
    borderColor: "#c00dda",
    borderRadius: 30,
  },
  backgroundImg: {
    flex: 1,
    width: width * 0.8,
    padding: 20,
    marginVertical: 20,
  },
  overlay: {
    justifyContent: "center",
  },
  view1: {
    flexDirection: "row",
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  tournamentName: {
    color: "#ffffff",
    fontSize: 24,
    paddingTop: 3,
  },
  view2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  dateAndId: {
    color: "#ffffff",
  },
  view3: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#583faf",
    backgroundColor: "rgba(119, 81, 234, 0.5)",
    padding: 20,
    alignItems: "center",
  },
  price: {
    color: "#ffffff",
    fontSize: 60,
  },
  prize: {
    fontSize: 18,
    color: "#ffffff",
  },
  view4: {
    marginVertical: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  titles: {
    color: "#ffffff",
    fontSize: 22,
    textAlign: "center",
  },
  box: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    paddingHorizontal: 10,
    width: width * 0.4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: 15,
  },
  line: {
    backgroundColor: "#8358ff",
    height: 2,
  },
  view5: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  fee: {
    alignSelf: "flex-start",
  },
  feeTitle: {
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 10,
  },
  feeText: {
    color: "#ffffff",
    fontSize: 30,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#c00dda",
    borderRadius: 15,
    paddingHorizontal: 25,
  },
  timeLeft: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    justifyContent: "center",
    height: height * 0.05,
    alignSelf: "flex-end",
    flexDirection: "row",
  },
  timeLeftText: {
    fontSize: 18,
  },
  btn: {
    backgroundColor: "#7751ea",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    paddingVertical: 15,
  },
  btnText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default SingleCard;
