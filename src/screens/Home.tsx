import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/image/plant.png")}
        style={styles.image}
      />
      <View style={styles.overlay}></View>
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
    width: 320,
    height: 320,
    top: 80,
    zIndex: 2,
    bottom: 0,
    backgroundColor: "red",
    marginLeft: -100,
  },
});
