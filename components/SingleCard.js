/** @format */

import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import IonIcon from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./SingleCardStyling";

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

export default SingleCard;
