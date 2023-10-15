import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import Onboarding from "./src/screens/Onboarding";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Splash from "./src/screens/Splash";

export default function App() {
  const Stack = createNativeStackNavigator();
//AsyncStorage.clear()
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.container}>
        <StatusBar translucent style="dark" />
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              animation: "fade",
            }}
          >
             <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
