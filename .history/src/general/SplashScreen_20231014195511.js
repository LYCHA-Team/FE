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
} from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
export default SlashScreen = function ({ navigation }) {

  // const [customerID, setCustomerID] = useState('');
  // const [adminID, setAdminID] = useState('');

  // useEffect(() => {
  //   getData();
  //   console.log("customer", customerID);
  //   console.log("admin", adminID);
  // })

  // const getData = async () => {
  //   try {
  //     await AsyncStorage.getItem("CustomerID").then((val) => {
  //       setCustomerID(val);
  //     });
  //     await AsyncStorage.getItem("AdminID").then((val) => {
  //       setAdminID(val);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/icon.png")} style={styles.logo} />
      <Text style={styles.title}>Welcome to BKSport!</Text>
      <Text style={styles.subtest}>
        Make it more convenient for you to book a pitch
      </Text>
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
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    marginVertical: 20,
    marginTop: 15,
  },
  logo: {
    marginTop: 20,
    width: 400,
    height: 250,
    marginBottom: 50,
  },
  subtest: {
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 30,
    marginBottom: 30,
    marginTop: 10,
  },
  button1: {
    marginTop: 70,
    backgroundColor: "#199A8E",
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
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonText2: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
  },
});
