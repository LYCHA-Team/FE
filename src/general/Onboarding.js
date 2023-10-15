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
} from "react-native";
import LottieView from 'lottie-react-native'

const { width, height } = Dimensions.get("window");
export default Onboarding = function ({ navigation }) {


  return (
    <View style={styles.container}>

      <View>
        <LottieView
          source={require('../../assets/splashscreen.json')}
          autoPlay
          loop
          style={styles.logo}
        />
      </View >
      <Image source={require("../../assets/splashscreen.png")} style={styles.title1} />
      <Text style={styles.subtest}>Login to enjoy the life with me !
Virtual World, Real Connection</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={styles.button1}
      >
        <Text style={styles.buttonText1}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("SignUp")}
        style={styles.button2}
      >
        <Text style={styles.buttonText2}>Sign up</Text>
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
    marginBottom: 10,
    marginVertical: 20,
    marginTop: 15,
  },
  title1: {
    width: 0.8*width,
    height: 0.05*height,
    resizeMode: "contain",


  },
  logo: {
    width: 0.8*width,
    height: 0.4*height,

  },

  subtest: {
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 30,
    marginBottom: 30,
    marginTop: 0.035*height,
  },
  button1: {
    marginTop: 0.05*height,
    backgroundColor: "#199A8E",
    padding: 12,
    width: 0.7*width,
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
    padding: 12,
    width: 0.7*width,
    height: 0.06*height,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: '50%',
    paddingVertical: 10,
    paddingHorizontal: 49,
    gap: 10,
    borderColor: "#199A8E",
    borderWidth: 1,
    marginBottom: 20,
  },
  buttonText1: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonText2: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
  },
});
