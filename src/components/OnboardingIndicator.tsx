import React from "react";
import { View, StyleSheet } from "react-native";

const OnboardingIndicator = ({ currentIndex, totalScreens }: any) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: totalScreens }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.indicator,
            {
              backgroundColor: currentIndex === index ? "#166423" : "#79C098",
              borderRadius: 20,
              width: currentIndex === index ? 28 : 10,
              margin: 5,
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  indicator: {
    height: 10,
  },
});

export default OnboardingIndicator;
