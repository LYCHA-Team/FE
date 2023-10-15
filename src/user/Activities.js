import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView } from "react-native";

export default Activities = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/left.png")}
            style={styles.topIcon}
          />
        </TouchableOpacity>
        <Text style={styles.topText}>
          Activities for you
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Find activities..."
        />
      </View>
      <Text style={styles.text}>Category</Text>
      <View style={styles.category}>
        <TouchableOpacity style={styles.Icon}>
          <Image
            source={require("../../assets/badminton.png")}
            style={styles.end}
          />
          <Text>Badminton</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Icon}>
          <Image
            source={require("../../assets/football.png")}
            style={styles.end}
          />
          <Text>Football</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Icon}>
          <Image
            source={require("../../assets/running.png")}
            style={styles.end}
          />
          <Text>Running</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Icon}>
          <Image
            source={require("../../assets/swim.png")}
            style={styles.end}
          />
          <Text>Swimming</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Icon}>
          <Image
            source={require("../../assets/more.png")}
            style={styles.end}
          />
          <Text>More</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>Recommend</Text>
      <TouchableOpacity style={styles.profileContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/download.jpg")}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Football</Text>
          <Text style={styles.info}>17 p.m, 23/10/2023</Text>
          <Text style={styles.info}>Location: Thu Duc</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.profileContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/download.jpg")}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Running</Text>
          <Text style={styles.info}>30 minutes everyday</Text>
          <Text style={styles.info}>Location: Hoc Mon</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.profileContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/download.jpg")}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Badminton</Text>
          <Text style={styles.info}>4 people</Text>
          <Text style={styles.info}>Location: Bach Khoa</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 15,
    paddingTop: 20,
  },
  topIcon: {
    height: 20,
    width: 20,
    marginRight: 8,
  },
  topText: {
    fontSize: 16,
    textAlign: "center",
    flex: 1,
  },
  searchContainer: {
    margin: 16,
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 24,
  },
  text: {
    marginLeft: 10,
    fontSize: 20,
    marginTop: 10,
  },
  end: {
    width: 30,
    height: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  category: {
    marginTop: 30,
    marginLeft: 10,
    flexDirection: "row",
    marginBottom:20,
  },
  Icon: {
    alignItems: "center",
  },
  imageContainer: {
    padding: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
  infoContainer: {
    marginLeft: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  info: {
    fontSize: 16,
  },
  profileContainer:
  {
    flex:1,
    flexDirection:"row",
    alignItems:"center",
    borderColor:"lightgray",
    borderWidth:1,
    margin:10,
    borderRadius:20,
  }
});

