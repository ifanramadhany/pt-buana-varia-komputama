import React, { useState, useCallback, useEffect } from "react";
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
  FlatList,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "react-native-vector-icons";
import { Input, SocialIcon, SearchBar } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";

export default function OrganizationalChartScreen() {
  const { members, successCreateMember } = useSelector(
    (state) => state.memberState
  );

  const membersChro = members.filter((item) => item.reportsTo === "Wijaya");
  const membersCto = members.filter((item) => item.reportsTo === "Ilham");
  const membersCfo = members.filter((item) => item.reportsTo === "Rudy");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapperAppName}>
        <Text style={{ fontSize: 22, color: "#0ACF83", fontWeight: "bold" }}>
          My Orgz
        </Text>
        <Text
          style={{
            fontSize: 30,
            marginTop: 10,
            fontWeight: "bold",
          }}
        >
          Organizational Chart
        </Text>
      </View>
      <ScrollView style={styles.wrapperOrgzChart}>
        <View style={styles.wrapperTitle}>
          <Text style={{ fontWeight: "bold", fontSize: 23 }}>CEO</Text>
        </View>
        <View style={styles.wrapperName}>
          <View style={styles.boxName}>
            <Text>Syamsudin</Text>
          </View>
        </View>
        <View style={styles.wrapperShortLineVertical}>
          <View style={styles.shortLineVertical}></View>
        </View>
        <View style={styles.longLineHorizontal}></View>
        <View style={styles.threeLineVertical}>
          <View style={styles.shortLineVertical}></View>
          <View style={styles.shortLineVertical}></View>
          <View style={styles.shortLineVertical}></View>
        </View>
        <View style={styles.wrapperThreeTitle}>
          <Text style={{ fontWeight: "bold", fontSize: 20, marginLeft: 5 }}>
            CHRO
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>CTO</Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginRight: 10,
              marginLeft: 8,
            }}
          >
            CFO
          </Text>
        </View>
        <View style={styles.wrapperThreeTitle}>
          <View style={styles.boxNameThree}>
            <Text>Wijaya (HR)</Text>
          </View>
          <View style={styles.boxNameThree}>
            <Text>Ilham (IT)</Text>
          </View>
          <View style={styles.boxNameThree}>
            <Text>Rudy (Fnc)</Text>
          </View>
        </View>
        <View style={styles.threeLineVertical}>
          <View style={styles.shortLineVertical}></View>
          <View style={styles.shortLineVertical}></View>
          <View style={styles.shortLineVertical}></View>
        </View>
        <View style={styles.wrapperThreeTitle}>
          <Text style={{ fontSize: 15 }}>Members :</Text>
          <Text style={{ fontSize: 15 }}>Members :</Text>
          <Text style={{ fontSize: 15 }}>Members :</Text>
        </View>
        <View style={styles.wrapperThreeMembers}>
          {/* department HR */}
          <View style={styles.containerMembers}>
            {membersChro.map((item) => {
              return (
                <View key={item.id} style={styles.boxNameMember}>
                  <Text numberOfLines={1}>{item.name}</Text>
                </View>
              );
            })}
          </View>
          {/* department IT  */}
          <View style={styles.containerMembers}>
          {membersCto.map((item) => {
              return (
                <View key={item.id} style={styles.boxNameMember}>
                  <Text numberOfLines={1}>{item.name}</Text>
                </View>
              );
            })}
          </View>
          {/* department Finance  */}
          <View style={styles.containerMembers}>
          {membersCfo.map((item) => {
              return (
                <View key={item.id} style={styles.boxNameMember}>
                  <Text numberOfLines={1}>{item.name}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  boxNameMember: {
    height: 25,
    width: "100%",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 2,
    backgroundColor: "#0ACF83",
  },
  wrapperThreeMembers: {
    // height: 30,
    // width: "100%",
    // backgroundColor: "yellow",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginHorizontal: 5,
  },
  containerMembers: {
    width: 105,
    // backgroundColor: "yellow",
    marginVertical: 1,
  },
  boxNameThree: {
    height: 25,
    width: "23%",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapperThreeTitle: {
    height: 30,
    // width: "100%",
    // backgroundColor: "yellow",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 5,
  },
  threeLineVertical: {
    height: 15,
    // width: "100%",
    // backgroundColor: "yellow",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 30,
  },
  longLineHorizontal: {
    height: 10,
    // width: "100%",
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  shortLineVertical: {
    width: 10,
    height: 15,
    backgroundColor: "green",
  },
  wrapperShortLineVertical: {
    height: 10,
    width: "100%",
    // backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
  },
  boxName: {
    height: 25,
    width: "25%",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapperName: {
    width: "100%",
    // backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
  },
  wrapperTitle: {
    // backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  wrapperOrgzChart: {
    backgroundColor: "#E5E7EB",
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  wrapperAppName: {
    // backgroundColor: 'yellow',
    height: 130,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
