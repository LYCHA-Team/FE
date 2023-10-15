import React from "react";
import {
  TextInput,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import BottomNavBar from "../common/BottomNavBar";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { data } from "./data";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Posts = ({ data }) => {
  return (
    <View style={{ display: "flex", rowGap: 15 }}>
      {data.map((item, index) => (
        <View
          key={index}
          style={{
            marginLeft: 35,
            marginRight: 35,
            backgroundColor: "#E8F3F1",
            width: windowWidth - 70,
            height: "auto",
            borderRadius: 25,
            padding: 20,
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "left" }}
          >
            <Text
              style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}
            >
              {item.name}
            </Text>
            <Text>Môn chơi: {item.type}</Text>
            <Text>Địa điểm: {item.location}</Text>
            <TouchableOpacity
              style={{
                marginTop: 10,
                borderRadius: 15,
                backgroundColor: "#199A8E",
                width: 80,
                height: 40,
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("Detail")}
            >
              <Text style={{ color: "white" }}>See more</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={item.src}
            style={{ borderRadius: 15, width: 100, height: 100 }}
          ></Image>
        </View>
      ))}
    </View>
  );
};

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Find what you love</Text>
          <TouchableOpacity>
            <Icon name="bell" color="#ccc" size={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.input}>
          <TextInput placeholder="Search"></TextInput>
        </View>
        {/* <View style={styles.titleContainer}>
          <Text style={styles.subtitle}>Category</Text>
        </View>
        <ScrollView horizontal>
          <CategoryTile data={categoryData} />
        </ScrollView> */}

        <View style={styles.titleContainer}>
          <Text style={styles.subtitle}>Activities you may like</Text>
          <TouchableOpacity
            onPress={()=>{navigation.navigate('Activities')}}
            style={styles.tab}>
            <Text style={styles.note}>See all</Text>
          </TouchableOpacity>
        </View>
        <Posts data={data} />
      </ScrollView>
      <BottomNavBar></BottomNavBar>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: "#f5f5f5",
    padding: 5,
  },
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 25,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  note: {
    fontSize: 12,
    color: "#199A8E",
  },
  input: {
    backgroundColor: "#FBFBFB",
    height: 40,
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 20,
    borderColor: "#E8F3F1",
    borderWidth: 1,
  },
});

export default Home;
