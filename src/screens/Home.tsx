import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import PercentIcon from "../assets/icons/percent";
import ThermometerIcon from "../assets/icons/thermometerIcon";
import LottieView from "lottie-react-native";
import { UsersModel } from "../models/dataModels";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  backgroundGradientFrom: "#0A8163",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#FFFFFF",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(0, 80, 0, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
};

const data = {
  labels: ["10", "11", "12", "13", "14", "15"],
  datasets: [
    {
      data: [20, 22, 18, 23, 18, 16],
      color: (opacity = 1) => `rgba(10, 129, 99, ${opacity})`,
      strokeWidth: 5,
    },
  ],
  legend: ["Statistic"],
};


type HomeProps = {
  item: UsersModel;
};

const Home: React.FC<HomeProps> = ({ item }) => {

  const [isWaterOn, setIsWaterOn] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Image
          source={require("../assets/image/plant.png")}
          style={styles.image}
        />
        <View style={styles.infoColumn}>
          <View style={styles.view1}>
            <View style={styles.infoContainer}>
              <Text style={styles.textLight}>{`19°`}</Text>
              <ThermometerIcon style={styles.thermometerIcon} />
            </View>
            <Text style={styles.infoText}>temperature</Text>
          </View>
          <View style={{ height: 18 }} />
          <View style={styles.view1}>
            <View style={styles.infoContainer}>
              <Text style={styles.textLight}>76</Text>
              <PercentIcon style={styles.percentIcon} />
            </View>
            <Text style={styles.infoText}>humidity</Text>
          </View>
          <View style={{ height: 5 }} />
          <View style={styles.pumpContainer}>
            <LottieView
              autoPlay={isWaterOn}
              loop={isWaterOn}
              style={{
                width: 100,
                height: 100,
              }}
              source={require("../assets/animation/animation_water.json")}
            />
            <Text style={styles.pumpText}>
              {isWaterOn ? "turn on" : "turn off"}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.overlay}>
       <View style={styles.chartView}>
       <LineChart
          data={data}
          width={screenWidth}
          height={420}
          chartConfig={chartConfig}
        />
       </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A8163",
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
    height: 390,
    top: 40,
    bottom: 0,
    marginLeft: -100,
  },
  textLight: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "800",
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
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  percentIcon: {
    width: 25,
    height: 25,
  },
  thermometerIcon: {
    width: 8,
    height: 39,
    marginLeft: 5,
  },
  infoText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "center",
  },
  view1: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  pumpContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    width: 80,
  },
  pumpText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "center",
  },
  chartView: {
    marginTop: 25,
    height: 200,
    width: screenWidth - 40,
    borderRadius: 16,
    backgroundColor: "#fff",
  },
});

export default Home;
