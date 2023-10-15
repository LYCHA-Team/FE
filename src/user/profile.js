import React from "react";
import { View, Text, Image, StyleSheet,TouchableOpacity } from "react-native";

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={require("../../assets/download.jpg")}
          style={styles.avatar}
        />
        <Text style={styles.name}>Amelia Aneta</Text>
        
      </View>
      <View style={styles.list}>
        <View style={styles.listItem}>
          <View style={styles.iconContainer}>
            
            <Image
              source={require("../../assets/heart.png")}
              style={styles.icon}
            />
          </View>
          <Text style={styles.itemText}>Interested</Text>
          <TouchableOpacity style={styles.endIcon}>
            <Image
            source={require("../../assets/end_icon.png")}
            style={styles.endIcon}
            />
            </TouchableOpacity>
        </View>
        <View style={styles.listItem}>
          <View style={styles.iconContainer}>
            <Image
              source={require("../../assets/resume.png")}
              style={styles.icon}
            />
          </View>
          <Text style={styles.itemText}>Information</Text>
          <TouchableOpacity style={styles.endIcon}>
            <Image
            source={require("../../assets/end_icon.png")}
            style={styles.endIcon}
            />
            </TouchableOpacity>
        </View>
        <View style={styles.listItem}>
          <View style={styles.iconContainer}>
            <Image
              source={require("../../assets/living.png")}
              style={styles.icon}
            />
          </View>
          <Text style={styles.itemText}>Living</Text>
          <TouchableOpacity style={styles.endIcon}>
            <Image
            source={require("../../assets/end_icon.png")}
            style={styles.endIcon}
            />
            </TouchableOpacity>
        </View>
        <View style={styles.listItem}>
          <View style={styles.iconContainer}>
            <Image
              source={require("../../assets/messenger.png")}
              style={styles.icon}
            />
          </View>
          <Text style={styles.itemText}>Contact</Text>
          <TouchableOpacity style={styles.endIcon}>
            <Image
            source={require("../../assets/end_icon.png")}
            style={styles.endIcon}
            />
            </TouchableOpacity>
        </View>
        <View style={styles.listItem}>
          <View style={styles.iconContainer}>
            <Image
              source={require("../../assets/logout.png")}
              style={styles.icon}
            />
          </View>
          <Text style={styles.itemText}>Log out</Text>
          <TouchableOpacity style={styles.endIcon}>
            <Image
            source={require("../../assets/end_icon.png")}
            style={styles.endIcon}
            />
            </TouchableOpacity>
        </View>
      </View>
      <View style={styles.nav}>
        <TouchableOpacity>

       <Image
            source={require("../../assets/heart.png")}
            style={styles.end}
        />
        </TouchableOpacity>
        <TouchableOpacity> 

        <Image
            source={require("../../assets/user.png")}
            style={styles.end}
        />
        </TouchableOpacity>
        <TouchableOpacity> 
        <Image
            source={require("../../assets/home.png")}
            style={styles.end}
        />
            
        </TouchableOpacity>
        <TouchableOpacity> 
            
        <Image
            source={require("../../assets/personal-information.png")}
            style={styles.end}
        />
        </TouchableOpacity>
        <TouchableOpacity>        
        <Image
            source={require("../../assets/messenger.png")}
            style={styles.end}
        />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#199A8E",
  },
  avatarContainer: {
    alignItems: "center",
    padding: 60,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  list: {
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E8F3F1",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  itemText: {
    fontSize: 16,
  },
  endIcon: {
    width: 20,
    height: 20,
    marginLeft:"auto",
  },
  end: {
    width: 24,
    height: 24,
    marginLeft:20,
    marginRight:20,
  },
  nav:
  {
    flex:1,
    flexDirection:"row",
    backgroundColor:"white",
    alignItems: "center",
    justifyContent: "center",
    margin:0,
    shadowColor:"black",
    shadowOpacity:0.75,
    shadowRadius:3,
    elevation:5,
  }
});

export default Profile;
