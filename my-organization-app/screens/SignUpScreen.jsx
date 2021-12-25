import React, {useEffect, useState} from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "react-native-vector-icons";
import { Input, SocialIcon } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import { createNewUser, setSuccessRegisterHandler } from "../store/actions/memberAction";

export default function SignUpScreen({ navigation }) {
  const dispatch = useDispatch();
  const { users, successRegister } = useSelector((state) => state.memberState);

  const [userInput, setUserInput] = useState({
    email: '',
    password: ''
  })

  const onChangeUserInput = (val, key) => {
    const newObj = { ...userInput };
    newObj[key] = val;
    setUserInput(newObj);
  };

  const clearInputUser = () => {
    setUserInput({
      email: '',
      password: ''
    })
  }

  const createNewUserHandler = () => {
    // console.log(userInput);
    dispatch(createNewUser(userInput))
    clearInputUser()
    dispatch(setSuccessRegisterHandler(true))
    setTimeout(() => {
      dispatch(setSuccessRegisterHandler(false))
    }, 2000);
  }

  return (
    <View>
      <ImageBackground
        source={require("../assets/image10.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.audio}>
            <Text
              style={{
                fontSize: 50,
                color: "white",
                fontWeight: "700",
                marginBottom: 10,
              }}
            >
              MyOrgz
            </Text>
            <Text style={{ color: "white" }}>
            Bring your idea to life and get set up for success!
            </Text>
          </View>
          <View style={styles.userInput}>
          <View style={styles.wrapperSuccessRegister}>
              {
                successRegister ? (
                <View style={styles.successRegister}>
                  <Text style={{color: 'green'}}>Email has been registered successfully!</Text>
                </View>
                ) : null
              }
            </View>
            <View style={styles.inputEmail}>
              <Input
                inputContainerStyle={{ borderBottomWidth: 0 }}
                inputStyle={{ fontSize: 15 }}
                placeholder="Email"
                value={userInput.email}
                onChangeText={(val) => onChangeUserInput(val, "email")}
                leftIcon={
                  <Ionicons
                    name="mail-outline"
                    size={24}
                    color="#111827"
                    style={{ marginRight: 10 }}
                  />
                }
              />
            </View>
            <View style={styles.inputPassword}>
              <Input
                secureTextEntry={true}
                inputStyle={{ fontSize: 15 }}
                inputContainerStyle={{ borderBottomWidth: 0 }}
                placeholder="Password"
                value={userInput.password}
                onChangeText={(val) => onChangeUserInput(val, "password")}
                leftIcon={
                  <Ionicons
                    name="lock-closed-outline"
                    size={24}
                    color="#111827"
                    style={{ marginRight: 10 }}
                  />
                }
              />
            </View>

            <TouchableOpacity
              style={styles.signInBotton}
              onPress={createNewUserHandler}
            >
              <Text style={{ color: "white", fontSize: 17 }}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.oauth}>
              <View style={styles.oauthItem}>
                <Ionicons name="logo-apple" size={35} color="#111827" />
              </View>
              <View style={styles.oauthItemCenter}>
                <SocialIcon type="facebook" iconSize={25} />
              </View>
              <View style={styles.oauthItem}>
                <Image
                  style={{ width: 55, height: 55 }}
                  source={{
                    uri: "https://www.designbust.com/download/1016/png/google_logo_png_transparent512.png",
                  }}
                ></Image>
              </View>
            </View>
            <View style={styles.signUphere}>
              <Text style={{ marginRight: 8, color: "white" }}>
                If you have an account?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
                <Text style={{ color: "#0ACF83" }}>Sign In here</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  successRegister: {
    backgroundColor: '#fff',
    height: 30,
    width: '75%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperSuccessRegister: {
    // backgroundColor: 'red',
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  oauthItemCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: 65,
    width: 65,
    borderRadius: 10,
    marginHorizontal: 15,
  },
  oauthItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: 65,
    width: 65,
    borderRadius: 10,
  },
  oauth: {
    display: "flex",
    flexDirection: "row",
    // backgroundColor: 'white',
    width: "90%",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 25,
  },
  signUphere: {
    display: "flex",
    flexDirection: "row",
    // backgroundColor: 'white',
    width: "90%",
    justifyContent: "center",
  },
  signInBotton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0ACF83",
    width: "90%",
    height: 50,
    borderRadius: 10,
    marginBottom: 15,
  },
  inputPassword: {
    backgroundColor: "white",
    width: "90%",
    borderRadius: 10,
    height: 50,
    marginBottom: 30,
  },
  inputEmail: {
    backgroundColor: "white",
    width: "90%",
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
  },
  userInput: {
    display: "flex",
    // backgroundColor: "yellow",
    height: "55%",
    width: "100%",
    alignItems: "center",
    // justifyContent: 'center',
  },
  audio: {
    display: "flex",
    // backgroundColor: 'green',
    height: "45%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    alignItems: "center",
    // justifyContent: 'center',
  },
});
