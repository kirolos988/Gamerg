/** @format */

import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

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

export default styles;
