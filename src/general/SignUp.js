import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const { width, height } = Dimensions.get("screen");
export default SignUp = function ({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={{ alignSelf: "left", marginLeft: 23 }}
      >
        <Icon name="arrow-left" size={30} />
      </TouchableOpacity>

      <Text
        style={{
          fontWeight: "bold",
          color: "black",
          fontSize: 30,
          marginTop: 5,
        }}
      >
        Register{" "}
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
            placeholder="Username"
            style={{ flex: 1, paddingVertical: 0 }}
            placeholderTextColor="#b4b4b4"
            onChangeText={(newText) => setUsername(newText)}
          />
        </View>

        <View style={styles.phone}>
          <Icon
            name="phone"
            size={20}
            color="#b97e7e"
            style={{ marginRight: 10 }}
          />
          <TextInput
            placeholder="Phone number"
            style={{ flex: 1, paddingVertical: 0 }}
            placeholderTextColor="#b4b4b4"
            onChangeText={(newText) => setPhone(newText)}
          />
        </View>

        <View style={styles.phone}>
          <Icon
            name="envelope"
            size={20}
            color="#b97e7e"
            style={{ marginRight: 10 }}
          />
          <TextInput
            placeholder="Email"
            style={{ flex: 1, paddingVertical: 0 }}
            placeholderTextColor="#b4b4b4"
            onChangeText={(newText) => setEmail(newText)}
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
            placeholder="Password"
            style={{ flex: 1, paddingVertical: 0 }}
            secureTextEntry={true}
            placeholderTextColor="#b4b4b4"
            onChangeText={(newText) => setPassword(newText)}
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
            placeholder="Confirm password"
            style={{ flex: 1, paddingVertical: 0 }}
            secureTextEntry={true}
            placeholderTextColor="#b4b4b4"
            onChangeText={(newText) => setConfirmpassword(newText)}
          />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Interest") }
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
            Register
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
          <Text>Have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text
              style={{ color: "#ff8e4f", fontWeight: "600", marginTop: 10 }}
            >
              Login
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
    backgroundColor: "#E8F3F1",
  },
  mainbox: {
    marginTop: 20,
    height: height * 0.75,
    width: width * 0.85,
    backgroundColor: "white",
    marginBottom: 30,
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
