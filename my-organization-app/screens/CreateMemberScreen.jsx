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
import { Picker } from "@react-native-picker/picker";
import { createNewMemberHandler } from "../store/actions/memberAction";

export default function CreateMemberScreen({navigation}) {
  const dispatch = useDispatch();

  // force update if needed
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const { members, successCreateMember } = useSelector(
    (state) => state.memberState
  );

  const [pictureMan, setPictureMan] = useState(false);
  const [pictureWoman, setPictureWoman] = useState(false);
  const [userInput, setUserInput] = useState({
    id: "",
    name: "",
    position: "",
    reportsTo: "",
    pictureUrl: "",
  });

  const selectMan = () => {
    setPictureMan(true);
    setPictureWoman(false);
    const newObj = { ...userInput };
    newObj["pictureUrl"] =
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    setUserInput(newObj);
  };

  const selectWoman = () => {
    setPictureWoman(true);
    setPictureMan(false);
    const newObj = { ...userInput };
    newObj["pictureUrl"] =
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80";
    setUserInput(newObj);
  };

  const onChangeUserInput = (val, key) => {
    const newObj = { ...userInput };
    newObj[key] = val;
    newObj["id"] = members[0].id + 1;
    setUserInput(newObj);
  };

  const sumbitNewMember = () => {
    // console.log(userInput, "ini user input");
    dispatch(createNewMemberHandler(userInput))
    clearInputUser()
    setTimeout(() => {
      navigation.navigate("HomeScreen")
    }, 2100);
  };

  const clearInputUser = () => {
    setPictureMan(false);
    setPictureWoman(false);
    setUserInput({
      id: "",
      name: "",
      position: "",
      reportsTo: "",
      pictureUrl: "",
    });
  };

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
          Create New Member
        </Text>
      </View>
      <View style={styles.wrapperFormCreate}>
        <View style={styles.wrapperSuccesCreate}>
          {successCreateMember ? (
            <View style={styles.successCreateMember}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                New Member has been created successfully!
              </Text>
            </View>
          ) : null}
        </View>
        <View style={styles.wrapperNameInput}>
          <Text
            style={{
              fontSize: 21,
              fontStyle: "italic",
              marginLeft: 20,
              marginBottom: 3,
            }}
          >
            Name
          </Text>
          <View style={styles.inputName}>
            <Input
              selectionColor={"#0ACF83"}
              value={userInput.name}
              onChangeText={(val) => onChangeUserInput(val, "name")}
              inputContainerStyle={{ borderBottomWidth: 0, marginVertical: 5 }}
              inputStyle={{ fontSize: 15 }}
              placeholder="Type name here.."
            />
          </View>
        </View>
        <View style={styles.wrapperPositionInput}>
          <Text
            style={{
              fontSize: 21,
              fontStyle: "italic",
              marginLeft: 20,
              marginBottom: 3,
            }}
          >
            Position
          </Text>
          <View style={styles.inputPosition}>
            <Input
              value={userInput.position}
              onChangeText={(val) => onChangeUserInput(val, "position")}
              selectionColor={"#0ACF83"}
              inputContainerStyle={{ borderBottomWidth: 0, marginVertical: 5 }}
              inputStyle={{ fontSize: 15 }}
              placeholder="Type position here.."
            />
          </View>
        </View>
        <View style={styles.wrapperReportsToPicker}>
          <Text
            style={{
              fontSize: 21,
              fontStyle: "italic",
              marginLeft: 20,
              marginBottom: 3,
            }}
          >
            Reports to:
          </Text>
          <View style={styles.wrapperPicker}>
            <Picker
              mode="dropdown"
              style={{ width: "100%" }}
              selectedValue={userInput.reportsTo}
              onValueChange={(val) => onChangeUserInput(val, "reportsTo")}
            >
              <Picker.Item
                label="Please select an option.."
                color="#94a3b8"
                value=""
              />
              <Picker.Item label="ILHAM (IT)" color="#0ACF83" value="Ilham" />
              <Picker.Item label="RUDY (Finance)" color="#0ACF83" value="Rudy" />
              <Picker.Item label="WIJAYA (HR)" color="#0ACF83" value="Wijaya" />
            </Picker>
          </View>
        </View>
        <View style={styles.wrapperSelectPicture}>
          <Text
            style={{
              fontSize: 21,
              fontStyle: "italic",
              marginLeft: 20,
              marginBottom: 3,
            }}
          >
            Select Picture
          </Text>
          <View style={styles.selectPicture}>
            <TouchableOpacity onPress={selectMan}>
              <Image
                style={pictureMan ? styles.pictureActive : styles.picture}
                resizeMode="cover"
                source={{
                  uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={selectWoman}>
              <Image
                style={pictureWoman ? styles.pictureActive : styles.picture}
                resizeMode="cover"
                source={{
                  uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.wrapperButtonSubmit}>
          <TouchableOpacity
            style={styles.buttonSubmit}
            onPress={sumbitNewMember}
          >
            <Text style={{ fontSize: 22, fontWeight: "bold", color: "white" }}>
              SUBMIT
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonSubmit: {
    backgroundColor: "#0ACF83",
    height: 40,
    width: "50%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapperButtonSubmit: {
    flex: 1,
    // backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  picture: {
    width: 90,
    height: 90,
    borderRadius: 10,
    borderWidth: 5,
    // borderColor: '#0ACF83'
  },
  pictureActive: {
    width: 90,
    height: 90,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: "#0ACF83",
  },
  selectPicture: {
    // backgroundColor: 'yellow',
    height: 110,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  wrapperPicker: {
    backgroundColor: "white",
    borderRadius: 5,
    height: 50,
    marginBottom: 20,
    marginHorizontal: 15,
    borderWidth: 0.5,
  },
  inputPosition: {
    backgroundColor: "white",
    borderRadius: 5,
    height: 50,
    marginBottom: 20,
    marginHorizontal: 15,
    borderWidth: 0.5,
  },
  wrapperSelectPicture: {
    // backgroundColor: "pink",
    height: 150,
    width: "100%",
  },
  wrapperPositionInput: {
    // backgroundColor: "pink",
    height: 100,
    width: "100%",
  },
  wrapperReportsToPicker: {
    // backgroundColor: "pink",
    height: 100,
    width: "100%",
  },
  inputName: {
    backgroundColor: "white",
    borderRadius: 5,
    height: 50,
    marginBottom: 20,
    marginHorizontal: 15,
    borderWidth: 0.5,
  },
  wrapperNameInput: {
    // backgroundColor: "pink",
    height: 100,
    width: "100%",
  },
  wrapperFormCreate: {
    backgroundColor: "#E5E7EB",
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  successCreateMember: {
    backgroundColor: "#0ACF83",
    height: 30,
    width: "75%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapperSuccesCreate: {
    height: 40,
    width: "100%",
    // backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
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
