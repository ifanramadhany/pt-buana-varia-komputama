import React, { useState } from "react";
import { FontAwesome } from "react-native-vector-icons";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";
import { BlurView } from "expo-blur";

export default function ModalMenuUser({ modalMenuUser, modalMenuUserClose, logOutHandler }) {
  return (
    <Modal animationType="fade" transparent={true} visible={modalMenuUser}>
      <BlurView tint="dark" intensity={80} style={styles.centeredViewMenu}>
        <View style={styles.modalViewMenu}>
          <View style={styles.wrapperButtonLogout}>
            <TouchableOpacity
              style={styles.logoutButton}
            >
              <Text style={{ color: "#374151" }}>Update Profile</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.wrapperButtonLogout}>
            <TouchableOpacity
              style={styles.logoutButton}
            >
              <Text style={{ color: "#374151" }}>Setting</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.wrapperButtonLogout}>
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={logOutHandler}
            >
              <Text style={{ color: "#374151", marginRight: 7 }}>Logout</Text>
              <FontAwesome
                name="sign-out"
                size={20}
                color="#334155"
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.wrapperButtonCloseModal}>
            <TouchableOpacity
              style={styles.closeModalButton}
              onPress={modalMenuUserClose}
            >
              <Text style={{ color: "white" }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BlurView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  logoutButton: {
    height: "80%",
    width: "50%",
    borderWidth: 0.5,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#4b5563",
  },
  wrapperButtonLogout: {
    // backgroundColor: "yellow",
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  closeModalButton: {
    height: 20,
    width: "90%",
    borderWidth: 0.5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4b5563",
  },
  wrapperButtonCloseModal: {
    // backgroundColor: "yellow",
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15
  },
  centeredViewMenu: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "pink",
  },
  modalViewMenu: {
    height: 200,
    width: "100%",
    backgroundColor: "#f3f4f6",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});
