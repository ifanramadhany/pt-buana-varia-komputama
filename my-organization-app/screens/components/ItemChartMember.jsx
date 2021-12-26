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

export default function ItemChartMember({item}) {
  return (
    <View key={item.id} style={styles.boxNameMember}>
      <Text numberOfLines={1}>{item.name}</Text>
    </View>
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
})