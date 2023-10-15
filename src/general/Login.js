import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";
import LottieView from "lottie-react-native"; //animation
import Icon from "react-native-vector-icons/FontAwesome"; //icons
const { width, height } = Dimensions.get("screen");

export default Login = function ({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Welcome")}
        style={{ alignSelf: "left", marginLeft: 23 }}
      >
        <Icon name="arrow-left" size={30} />
      </TouchableOpacity>
      <View style={styles.avatarContainer}>
        <LottieView
          source={require("../../assets/login.json")}
          autoPlay
          loop
          speed={1}
          style={styles.logo}
        />
      </View>
      <Text
        style={{
          fontWeight: "bold",
          color: "black",
          fontSize: 30,
          marginTop: 5,
        }}
      >
        Log in{" "}
      </Text>
      <View style={styles.mainbox}>
        <View style={styles.phone}>
          <Icon
            name="user-o"
            size={20}
            color="#b97e7e"
            style={{ marginRight: 10 }}
          />
          <TextInput
            placeholder="username"
            style={{ flex: 1, paddingVertical: 0 }}
            placeholderTextColor="#b4b4b4"
            onChangeText={newText => setUsername(newText)}
          />
        </View>

        <View style={styles.phone}>
          <Icon
            name="lock"
            size={20}
            color="#b97e7e"
            style={{ marginRight: 10 }}
          />
          <TextInput
            placeholder="password"
            style={{ flex: 1, paddingVertical: 0 }}
            secureTextEntry={true}
            placeholderTextColor="#b4b4b4"
            onChangeText={newText => setPassword(newText)}
          />
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Text style={{ color: "#AA7C7C", fontWeight: "600" }}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>navigation.navigate("Home")}
          style={{
            marginTop: 20,
            backgroundColor: "#e77c7c",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            padding: 10,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "700", fontSize: 16 }}>
            Log in{" "}
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <View
            style={{
              flex: 1,
              height: 1,
              borderBottomWidth: 1,
              borderBottomColor: "black",
            }}
          ></View>
          <Text style={{ textAlign: "center", marginHorizontal: 10 }}>
            {" "}
            Or{" "}
          </Text>
          <View
            style={{
              flex: 1,
              height: 1,
              borderBottomWidth: 1,
              borderBottomColor: "black",
            }}
          ></View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              backgroundColor: "#c14949",
              borderRadius: 10,
              paddingHorizontal: 45,
              paddingVertical: 8,
            }}
          >
            <Icon name="google" size={20} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              backgroundColor: "#284c83",
              borderRadius: 10,
              paddingHorizontal: 45,
              paddingVertical: 8,
            }}
          >
            <Icon name="facebook" size={20} color="#ffffff" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 15,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text
              style={{ color: "#ff8e4f", fontWeight: "600", marginTop: 10 }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFF9F9",
    justifyContent: "center",
  },
  logo: {
    width: 400,
    height: 250,
  },
  mainbox: {
    marginTop: 20,
    height: height * 0.5,
    width: width * 0.85,
    backgroundColor: "white",
    marginBottom: 5,
    borderRadius: 40,
    justifyContent: "center",
    alignContent: "center",
    padding: 20,
  },
  phone: {
    flexDirection: "row",
    borderColor: "#deacac",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#FFF9F9",
    borderRadius: 10,
    marginBottom: 25,
  },
});
