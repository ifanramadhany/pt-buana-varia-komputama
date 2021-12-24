import React from "react";
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { Input } from "react-native-elements";

export default function SignInScreen({navigation}) {
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
            <View style={styles.inputEmail}>
              <Input
                inputContainerStyle={{borderBottomWidth:0}}
                inputStyle={{fontSize: 15}}
                placeholder="Email"
                leftIcon={<Icon name="mail-outline" size={24} color="#111827" style={{marginRight: 8}} />}
                />
            </View>
            <View style={styles.inputPassword}>
              <Input
                secureTextEntry={true}
                inputStyle={{fontSize: 15}}
                inputContainerStyle={{borderBottomWidth:0}}
                placeholder="Password"
                leftIcon={<Icon name="lock-closed-outline" size={24} color="#111827" style={{marginRight: 8}} />}
              />
            </View>
            <Text style={{color: 'white', marginBottom: 25}}>
              Forgot Password
            </Text>
            <TouchableOpacity style={styles.signInBotton} onPress={() => navigation.navigate('MainScreen')}>
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
