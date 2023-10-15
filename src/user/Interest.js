import React, { useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity} from "react-native";
import { Picker } from "@react-native-picker/picker";
export default Interested = ({navigation}) => {
  const [age, setAge] = useState("18"); // Tuổi mặc định là 18
  const [height, setHeight] = useState("160"); // Chiều cao mặc định là 160 cm
  const [weight, setWeight] = useState("60"); // Cân nặng mặc định là 60 kg

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Tell me about yourself !</Text>
      <View style={styles.pick}>

      <Text style={styles.label}>Select Your Age:</Text>
      <Picker
        selectedValue={age}
        onValueChange={(itemValue) => setAge(itemValue)}
      >
        {Array.from({ length: 100 }, (_, i) => i + 1).map((value) => (
          <Picker.Item key={value} label={value.toString()} value={value.toString()} />
        ))}
      </Picker>
      </View>
      <View style={styles.pick}>

      <Text style={styles.label}>Select Your Height (in cm):</Text>
      <Picker
        selectedValue={height}
        onValueChange={(itemValue) => setHeight(itemValue)}
      >
        {Array.from({ length: 150 }, (_, i) => i + 120).map((value) => (
          <Picker.Item key={value} label={value.toString()} value={value.toString()} />
        ))}
      </Picker>
      </View>
      <View style={styles.pick}>
      <Text style={styles.label}>Select Your Weight (in kg):</Text>
      <Picker
        selectedValue={weight}
        onValueChange={(itemValue) => setWeight(itemValue)}
      >
        {Array.from({ length: 100 }, (_, i) => i + 40).map((value) => (
          <Picker.Item key={value} label={value.toString()} value={value.toString()} />
        ))}
      </Picker>
      </View>

      <View style={styles.container1}>
        <Image
          style={styles.img}
          source={require("../../assets/pic.png")}
        />
        <Text style={styles.text}>Choose what you love ...</Text>
      </View>
      <View style={styles.X}>

      <TouchableOpacity style={styles.green}>
        <Text>football</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.red}>
        <Text>badminton</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.green}>
        <Text>yoga</Text>
      </TouchableOpacity>

      </View>
      <View style={styles.X}>
      <TouchableOpacity style={styles.red}>
        <Text>swimming</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.green}>
        <Text>volleyball</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.red}>
        <Text>tennis</Text>
      </TouchableOpacity>

      </View>
      <View style={styles.X}>

      <TouchableOpacity style={styles.green}>
        <Text>basketball</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.red}>
        <Text>chess</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.green}>
        <Text>aerobic</Text>
      </TouchableOpacity>

      </View>
      <View style={styles.bottom}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.Done}>
        <Text>Done</Text>
      </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    marginLeft: 10,
    fontSize: 20,
    marginTop: 10,
    marginBottom:10,
    color: "#199A8E",
  },
  container1: {
    flex: 1,
    flexDirection: "row",
  },
  img: {
    height: 50,
    width: 50,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft:10,
  },
  pick:
  {
    borderColor:"#199A8E",
    borderWidth:1,
    margin:5,
    borderRadius:20,
    flex:1,
    padding:0,
  },
  red:
  {
    borderColor:"orange",
    borderWidth:0.5,
    borderRadius:20,
    height:30,
    width:80,
    margin:20,
    alignItems:"center",
  },
  green:
  {
    borderColor:"green",
    borderWidth:0.5,
    height:30,
    width:80,
    margin:20,
    borderRadius:20,
    alignItems:"center",
  },
  X:
  {
    flex:1,
    flexDirection:"row",
  },
  bottom:
  {
    flex:1,
    alignItems:"center",
  },
  Done:
  {
    backgroundColor:"#199A8E",
    borderRadius:10,
    height:40,
    width:100,
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
});
