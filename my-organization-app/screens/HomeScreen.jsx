import React, { useState, useCallback } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  RefreshControl,
  TouchableHighlight,
  Pressable,
  TouchableOpacity,
  FlatList
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "react-native-vector-icons";
import { Input, SocialIcon, SearchBar } from "react-native-elements";
import { ItemMember } from "./components";
import { useSelector, useDispatch } from "react-redux";
import * as Google from 'expo-google-app-auth';

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function HomeScreen({navigation}) {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const { userInfo } = useSelector((state) => state.memberState);

  const members = [
    {
      id: 1,
      name: "Daniel Dewa",
      position: "Staff IT",
    },
    {
      id: 2,
      name: "Yanti Permata",
      position: "Staff Finance",
    },
    {
      id: 3,
      name: "Christian",
      position: "Staff HR",
    },
    {
      id: 4,
      name: "Samuel Utama",
      position: "Staff IT",
    },
  ]

  const logOutHandler = () => {
    // console.log('google log out');
    const config = {
      iosClientId: `835876374944-5k8m3a5fv8hi2ecril8ompgf7oej5mi2.apps.googleusercontent.com`,
      androidClientId: `835876374944-02psaf7kno7t29di5dp46aonum1lnhqe.apps.googleusercontent.com`,
      scopes: ['profile', 'email']
    }
    Google.logOutAsync(config)
    navigation.navigate("SignInScreen")
  }

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={styles.scrollViewContent}
      >
        <View style={styles.logo}>
          <View style={{ marginHorizontal: 15 }}>
            <Ionicons name="menu-outline" size={30} color="#111827" />
          </View>
          <View>
            <Text style={styles.myOrgz}>myOrgz</Text>
          </View>
          <TouchableOpacity style={{ marginRight: 15 }} onPress={logOutHandler}>
            <Image
              style={styles.imgUser}
              resizeMode="cover"
              source={{
                uri: "https://images.unsplash.com/photo-1531256456869-ce942a665e80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
              }}
            ></Image>
          </TouchableOpacity>
        </View>

        <View style={styles.hiUser}>
          <View>
            <Text style={{ fontSize: 16, marginLeft: 18 }}>Hi, {userInfo}</Text>
          </View>
          <View style={{ marginHorizontal: 18 }}>
            <Text style={{ fontSize: 29, fontWeight: "bold" }}>
              What are you looking for today?
            </Text>
          </View>
          <View>
            <View
              activeOpacity={0.7}
              style={styles.inputSearch}
            >
              <Input
                disabled={true}
                inputContainerStyle={{ borderBottomWidth: 0 }}
                inputStyle={{ fontSize: 15 }}
                placeholder="Search member"
                placeholderTextColor="#9CA3AF"
                leftIcon={
                  <FontAwesome
                    name="search"
                    size={24}
                    color="#9CA3AF"
                    style={{ marginRight: 10 }}
                  />
                }
                rightIcon={
                  <TouchableOpacity>
                    <FontAwesome
                      name="times"
                      size={24}
                      color="#9CA3AF"
                      style={{ marginRight: 10 }}
                    />
                  </TouchableOpacity>
                }
              />
            </View>
          </View>
        </View>

        <View style={styles.containerTable}>
          <View style={styles.wrapperKeyTable}>
            <View style={styles.keyId}>
              <Text style={{ fontWeight: "bold", color: '#fff'}}>ID</Text>
            </View>
            <View style={styles.keyName}>
              <Text style={{ fontWeight: "bold", color: '#fff'}}>Name</Text>
            </View>
            <View style={styles.keyPosition}>
              <Text style={{ fontWeight: "bold", color: '#fff'}}>Position</Text>
            </View>
            <View style={styles.keyAction}>
              <Text style={{ fontWeight: "bold", color: '#fff'}}>Action</Text>
            </View>
          </View>
          {/* Looping Item here  */}
          <FlatList 
          
          style={styles.wrapperItemTable}
          data={members}
          renderItem={({ item, index }) => (
            <ItemMember
              item={item}
              navigation={navigation}
            ></ItemMember>
          )}
          keyExtractor={(item, index) => item.id}
          >
          </FlatList>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  itemAction: {
    // backgroundColor: "red",
    height: "100%",
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  itemPosition: {
    // backgroundColor: "blue",
    height: "100%",
    width: "35%",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
  },
  itemName: {
    // backgroundColor: "pink",
    height: "100%",
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
  },
  itemId: {
    // backgroundColor: "yellow",
    height: "100%",
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
  },
  itemTable: {
    height: 45,
    backgroundColor: "#fff",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  wrapperItemTable: {
    // backgroundColor: "green",
    marginHorizontal: 13,
    marginBottom: 1 
  },
  keyAction: {
    // backgroundColor: "red",
    height: "100%",
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  keyPosition: {
    // backgroundColor: "blue",
    height: "100%",
    width: "35%",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
  },
  keyName: {
    // backgroundColor: "pink",
    height: "100%",
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
  },
  keyId: {
    // backgroundColor: "yellow",
    height: "100%",
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
  },
  wrapperKeyTable: {
    height: 45,
    backgroundColor: "#0ACF83",
    marginTop: 15,
    marginHorizontal: 13,
    borderWidth: 1,
    flexDirection: "row",
  },
  containerTable: {
    backgroundColor: "#E5E7EB",
    height: 490,
    width: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  myOrgz: {
    // backgroundColor: 'green',
    fontWeight: "bold",
    fontSize: 25,
    color: "#0ACF83",
  },
  inputSearch: {
    // backgroundColor: "blue",
    width: "90%",
    borderRadius: 15,
    borderColor: "#9CA3AF",
    borderWidth: 1,
    height: 50,
    marginHorizontal: 18,
    marginBottom: 124,
    marginTop: 20,
  },
  imgUser: {
    height: 40,
    width: 40,
    borderRadius: 150,
    // backgroundColor: 'white'
  },
  hiUser: {
    height: 180,
    width: "100%",
    // backgroundColor: 'blue'
  },
  logo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 65,
    width: "100%",
    // backgroundColor: 'yellow'
  },
  scrollViewContent: {
    display: "flex",
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
