import {
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase";
import Icon from "react-native-vector-icons/FontAwesome";
import COLORS from "../consts/colors";
import React from "react";

const userData = { email: "", password: "" };

export default function SignIn({ navigation }) {
  const [user, setUser] = useState(userData);
  const [loggedInUser, setLoggedInUser] = useState();
  const [isLogin, setIsLogin] = useState(true);
  const CategoryIcons = [
    <Icon name='google' size={30} color={COLORS.white} />,
    <Icon name='facebook-square' size={30} color={COLORS.white} />,
  ];

  const ListIcons = () => {
    return (
      <View style={style.categoryContainer}>
        {CategoryIcons.map((icon, index) => (
          <View key={index} style={style.iconContainer}>
            {icon}
          </View>
        ))}
      </View>
    );
  };

  const handleRegister = () => {
    console.log("Register");
    console.log(user);

    auth
      .createUserWithEmailAndPassword(user.email.trim(), user.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user.email);
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
    setUser(userData);
  };
  
  const handleLogin = () => {
    console.log("Login");
    setUser(userData);
    auth
      .signInWithEmailAndPassword(user.email.trim(), user.password.trim())
      .then((user) => {
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={{ flex: 1, overflow: "hidden" }}>
      <StatusBar translucent backgroundColor='rgba(0,0,0,0)' />
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../assets/onboardImage.jpg")}
      >
        <View style={style.details}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 35,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {isLogin ? "Login" : "Register"}
          </Text>
          <View style={style.inputContainer}>
            <TextInput
              style={style.input}
              placeholder='Email'
              onChangeText={(text) => setUser({ ...user, email: text })}
              value={user.email}
            />
            <TextInput
              style={style.input}
              placeholder='Password'
              onChangeText={(text) => setUser({ ...user, password: text })}
              value={user.password}
              secureTextEntry={true}
            />
          </View>
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={style.forgetPassword}>
              {isLogin ? "Forget Password?" : "Already have an Account?"}
            </Text>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => (isLogin ? handleLogin() : handleRegister())}
            >
              <View style={style.btn}>
                <Text style={{ fontWeight: "bold", color: COLORS.white }}>
                  {isLogin ? "Login" : "Register"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={style.lineBreakText}>or</Text>
          <ListIcons />
        </View>
      </ImageBackground>
    </View>
  );
}

const style = StyleSheet.create({
  details: {
    top: "25%",
    height: "60%",
    position: "absolute",
    paddingHorizontal: 50,
  },
  btn: {
    height: 30,
    width: 100,
    backgroundColor: COLORS.primary,
    marginTop: 5,
    alignSelf: "auto",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    height: 40,
    width: 250,
    color: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.white,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  forgetPassword: {
    color: COLORS.white,
    marginTop: 10,
    fontSize: 12,
    alignSelf: "auto",
    paddingHorizontal: 5,
  },
  lineBreakText: {
    color: COLORS.white,
    marginTop: 20,
    fontSize: 18,
    textAlign: "center",
  },
  categoryContainer: {
    width: "30%",
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  iconContainer: {
    borderRadius: 10,
  },
});
