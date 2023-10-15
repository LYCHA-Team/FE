import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  ImageBackground,
} from "react-native";
import LottieView from 'lottie-react-native'

const { width, height } = Dimensions.get("window");
export default SlashScreen = function ({ navigation }) {
  return (

    <View style={styles.container}>
      <Image source={require("../../assets/home.jpg")} style={styles.logo} />
      <Text style={styles.title}>Welcome to</Text>
      <Image source={require("../../assets/splashscreen.png")} style={styles.title1} />
      <Text style={styles.subtest}>
        Making it easier for you to find someone to play sports with
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Onboarding")}
        style={styles.button1}
      >
        <Text style={styles.buttonText1}>Let's get started !</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 15,
  },
  title1: {
    width: 0.8*width,
    height: 0.06*height,
    resizeMode: "contain",

  },
  logo: {
    marginTop: 5,
    width: 1*width,
    height: 0.38*height,
    marginBottom: 0,
  },

  subtest: {
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 30,
    marginBottom: 30,
    marginTop: 0.053*height,
  },
  button1: {
    marginTop: 0.02*height,
    backgroundColor: "#199A8E",
    padding: 5,
    marginBottom: 0.01*height,
    width: 0.8*width,
    height: 0.06*height,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: '50%',
    paddingVertical: 10,
    paddingHorizontal: 49,
    gap: 10,
  },
  button2: {
    marginTop: 40,
    backgroundColor: "#FFFFFF",
    padding: 10,
    width: 181.28,
    height: 48,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 49,
    gap: 10,
    borderColor: "#199A8E",
    borderWidth: 1,
    marginBottom: 20,
  },
  buttonText1: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonText2: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
  },
});
