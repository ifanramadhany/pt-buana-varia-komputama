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
  StatusBar
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "react-native-vector-icons";
import { Input, SocialIcon, SearchBar } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";

export default function OrganizationalChartScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapperAppName}>
      <Text style={{ fontSize: 22, color: "#0ACF83", fontWeight: "bold", }}>
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
        <View style={styles.wrapperOrgzChart}>
          
        </View>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapperOrgzChart: {
    backgroundColor: "#E5E7EB",
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  wrapperAppName: {
    // backgroundColor: 'yellow',
    height: 130,
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
