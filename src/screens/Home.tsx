import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import PercentIcon from "../assets/icons/percent";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Image
          source={require("../assets/image/plant.png")}
          style={styles.image}
        />
        <View style={styles.infoColumn}>
          <View style={styles.infoContainer}>
            <Text style={styles.textLight}>43</Text>
            <PercentIcon style={styles.percentIcon} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.textLight}>43</Text>
            <PercentIcon style={styles.percentIcon} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.textLight}>43</Text>
            <PercentIcon style={styles.percentIcon} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.textLight}>43</Text>
            <PercentIcon style={styles.percentIcon} />
          </View>
        </View>
      </View>
      <View style={styles.overlay}>
        <Text>Salam</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#21B792",
  },
  overlay: {
    position: "absolute",
    zIndex: 1,
    bottom: 0,
    width: "100%",
    height: "60%",
    backgroundColor: "white",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  image: {
    width: 340,
    height: 370,
    top: 50,
    bottom: 0,
    marginLeft: -100,
  },
  textLight: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "300",
    textAlign: "center",
  },
  view: {
    flexDirection: "row",
    alignItems: "center",
    zIndex: 2,
  },
  infoColumn: {
    flexDirection: "column",
    marginLeft: 20,
    gap: 20,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  percentIcon: {
    width: 25,
    height: 25,
  },
});
