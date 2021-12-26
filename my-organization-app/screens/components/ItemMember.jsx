import React, {useState} from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { FontAwesome, Ionicons } from "react-native-vector-icons";
import { ModalDetail } from ".";

export default function ItemMember({ item, navigation }) {
  const [modalDetail, setModalDetail] = useState(false);
  const modalDetailClose = () => setModalDetail(false);

  return (
    <>
      <View style={styles.itemTable}>
        <View style={styles.itemId}>
          <Text numberOfLines={1} style={{ fontWeight: "bold" }}>
            {item.id}
          </Text>
        </View>
        <View style={styles.itemName}>
          <Text numberOfLines={1} style={{ fontWeight: "bold" }}>
            {item.name}
          </Text>
        </View>
        <View style={styles.itemPosition}>
          <Text numberOfLines={1} style={{ fontWeight: "bold" }}>
            {item.position}
          </Text>
        </View>
        <View style={styles.itemAction}>
          <TouchableOpacity style={styles.wrapperIcon} onPress={() => setModalDetail(true)}>
            <Ionicons name="eye" size={25} color="#0ACF83" ></Ionicons>
          </TouchableOpacity>
        </View>
      </View>

      {/* modal detail  */}
      <ModalDetail
        item={item}
        modalDetail={modalDetail}
        modalDetailClose={modalDetailClose}
        navigation={navigation}
      ></ModalDetail>
    </>
  );
}

const styles = StyleSheet.create({
  wrapperIcon: {
    height: 30,
    width: 40,
    borderRadius: 5,
    // backgroundColor: 'green',
    justifyContent: "center",
    alignItems: "center",
  },
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
});
