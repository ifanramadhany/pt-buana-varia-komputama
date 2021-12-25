import React, {useEffect, useState} from "react";
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "react-native-vector-icons";
import { Input } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, setEmailPasswordWrongHandler, setUserInfo } from "../store/actions/memberAction";

export default function SignInScreen({navigation}) {
  const dispatch = useDispatch();
  const { users, isLoading, isError, wrongEmailPassword } = useSelector((state) => state.memberState);
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

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const checkUser = () => {
    // console.log(userInput);
    const found = users.some(el => el.email === userInput.email && el.password === userInput.password);
    if (found) {
      navigation.navigate("MainScreen")
      dispatch(setUserInfo(userInput.email))
      dispatch(setEmailPasswordWrongHandler(false))
      clearInputUser()
    } else {
      dispatch(setEmailPasswordWrongHandler(true))
      setTimeout(() => {
        dispatch(setEmailPasswordWrongHandler(false))
      }, 2000);
    }
  }

  // console.log(users);
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
            <View style={styles.wrapperFailedLogin}>
              {
                wrongEmailPassword? (
                  <View style={styles.failedLogin}>
                    <Text style={{color: 'red'}}>Your email/password is wrong!</Text>
                  </View>
                ) : null
              }
            </View>
            <View style={styles.inputEmail}>
              <Input
                inputContainerStyle={{borderBottomWidth:0}}
                inputStyle={{fontSize: 15}}
                placeholder="Email"
                value={userInput.email}
                onChangeText={(val) => onChangeUserInput(val, "email")}
                leftIcon={<Ionicons name="mail-outline" size={24} color="#111827" style={{marginRight: 8}} />}
                />
            </View>
            <View style={styles.inputPassword}>
              <Input
                secureTextEntry={true}
                inputStyle={{fontSize: 15}}
                inputContainerStyle={{borderBottomWidth:0}}
                value={userInput.password}
                onChangeText={(val) => onChangeUserInput(val, "password")}
                placeholder="Password"
                leftIcon={<Ionicons name="lock-closed-outline" size={24} color="#111827" style={{marginRight: 8}} />}
              />
            </View>
            <Text style={{color: 'white', marginBottom: 25}}>
              Forgot Password
            </Text>
            <TouchableOpacity style={styles.signInBotton} onPress={checkUser}>
              <View>
                <Text style={{color: 'white', fontSize: 17}}>Sign In</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.signUphere}>
              <Text style={{marginRight: 8, color: 'white'}}>Didn’t have any account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
                <Text style={{color: '#0ACF83'}}>Sign Up here</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  signUphere: {
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: 'white',
    width: '90%',
    justifyContent: 'center',
  },
  signInBotton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0ACF83',
    width: '90%',
    height: 50,
    borderRadius: 10,
    marginBottom: 15
  },
  failedLogin: {
    backgroundColor: '#fff',
    height: 30,
    width: '60%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperFailedLogin: {
    // backgroundColor: 'red',
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputPassword: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 10,
    height: 50,
    marginBottom: 25
  },
  inputEmail: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
  },  
  userInput: {
    display: 'flex',
    // backgroundColor: "yellow",
    height: "55%",
    width: "100%",
    alignItems: "center",
    justifyContent: 'center',
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
