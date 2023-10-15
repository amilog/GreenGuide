import React, { useState, useEffect } from "react";
import { View, StyleSheet, Animated, Easing } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { getStatus } from "../redux/onboard/OnboardSlice";
import uuid from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LottieView from "lottie-react-native";

const Splash = ({ navigation }: any) => {
  const fadeAnimation = new Animated.Value(0);
  const iconOpacity = new Animated.Value(0);
  const textTranslateX = new Animated.Value(-300);
  const textOpacity = new Animated.Value(0);
  const fromCodeTextTranslateY = new Animated.Value(-30);
  const startFromCodeTextAnimation = useState(false);
  const totalAnimationDuration = 300;
  const dispatch = useDispatch<AppDispatch>();
  const state = useSelector<RootState, { isOnboarded: boolean; loading: boolean }>((state) => state.onBoard);

  useEffect(() => {
    let deviceId: any = uuid.v4();
    AsyncStorage.getItem("secure_deviceid")
      .then((fetchUUID) => {
        if (fetchUUID) {
          deviceId = fetchUUID;
        }
        AsyncStorage.setItem("secure_deviceid", deviceId.toString());
      })
      .then(() => {
        startAnimation();
        dispatch(getStatus());
      });
  }, []);

  const startAnimation = () => {
    setTimeout(() => {
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: totalAnimationDuration,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();

      Animated.timing(iconOpacity, {
        toValue: 1,
        duration: totalAnimationDuration,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();

      setTimeout(() => {
        Animated.timing(textTranslateX, {
          toValue: 1,
          duration: totalAnimationDuration * 1.6,
          easing: Easing.ease,
          useNativeDriver: false,
        }).start();

        Animated.timing(textOpacity, {
          toValue: 1,
          duration: totalAnimationDuration * 5,
          easing: Easing.ease,
          useNativeDriver: false,
        }).start();
      }, 500);

      setTimeout(() => {
        startFromCodeTextAnimation[1](true);
      }, totalAnimationDuration * 4.5);
    }, 500);
  };

  useEffect(() => {
    if (startFromCodeTextAnimation[0]) {
      Animated.timing(fromCodeTextTranslateY, {
        toValue: 0,
        duration: totalAnimationDuration,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();

      setTimeout(() => {
        if (state.isOnboarded) {
          navigation.replace("Home");
        } else {
          navigation.replace("Onboarding");
        }
      }, 400);
    }
  }, [startFromCodeTextAnimation[0]]);

  return (
    <View style={styles.container}>
      <View style={styles.background} />
      <View style={styles.animationContainer}>
        <LottieView
          autoPlay={true}
          loop={false}
          style={styles.animation}
          source={require("../assets/animation/animation_lnrb9krk.json")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  animationContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    width: 200,
    height: 200,
  },
});

export default Splash;
