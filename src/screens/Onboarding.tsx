import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";
import { getStatus, setStatus } from "../redux/onboard/OnboardSlice";
import OnboardingIndicator from "../components/OnboardingIndicator";
import SkipButton from "../assets/icons/skipButton";
import OnboardingItem from "../components/OnboardingItem";
import { OnboardingData } from "../data/Onboarding";
import { ThemedButton } from "react-native-really-awesome-button";

const Onboarding = ({ navigation }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch<AppDispatch>();
  const slidersRef = useRef<FlatList>(null);
  useEffect(() => {
    dispatch(getStatus());
  }, []);

  const handleNext = () => {
    if (currentIndex < OnboardingData.length - 1) {
      slidersRef.current?.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(currentIndex + 1);
    }
    if (currentIndex === OnboardingData.length - 1) {
      dispatch(setStatus(true)).then((res) => {
        console.log(res);
        navigation.replace("Home");
      });
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={OnboardingData}
        ref={slidersRef}
        renderItem={OnboardingItem}
        horizontal
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
      <View style={styles.indicator}>
        <OnboardingIndicator
          currentIndex={currentIndex}
          totalScreens={OnboardingData.length}
          press={handleNext}
        />
      </View>
      <View style={styles.buttonContainer}>
        {currentIndex === 0 ? (
          <ThemedButton
            name="bruce"
            type="primary"
            onPress={handleNext}
            style={styles.button}
          >
            Skip
          </ThemedButton>
        ) : (
          <ThemedButton
            name="bruce"
            type="primary"
            onPress={handleNext}
            style={styles.button}
          >
            Start
          </ThemedButton>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    paddingHorizontal: "25%",
  },
  backButton: {
    width: 60,
    height: 60,
  },
  nextButton: {
    width: 350,
    height: 100,
    backgroundColor: "red",
  },
  indicator: {
    position: "absolute",
    top: 720,
    right: 0,
    left: 0,
  },
  startedButton: {
    width: 100,
    height: 100,
  },
  button: {
    marginBottom: 16,
  },
});

export default Onboarding;
