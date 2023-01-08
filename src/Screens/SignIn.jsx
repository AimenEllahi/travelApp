import {
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase";
import Icon from "react-native-vector-icons/FontAwesome";
import COLORS from "../consts/colors";
import { useToast } from "react-native-toast-notifications";
import React from "react";

const userData = { email: "", password: "", confirmPassword: "" };

export default function SignIn({ navigation }) {
  const toast = useToast();
  const [user, setUser] = useState(userData);
  const [loggedInUser, setLoggedInUser] = useState();
  const [isLogin, setIsLogin] = useState(false);
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
    if (user.password !== user.confirmPassword) {
      toast.show("Password doesn't match", {
        type: "danger",
        placement: "top",
        duration: 3000,
      });
      return;
    }
    auth
      .createUserWithEmailAndPassword(user.email.trim(), user.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user.email);
        toast.show("Registration Successful", {
          type: "success",
          placement: "top",
          duration: 3000,
        });
        setUser(userData);
      })
      .catch((error) => {
        console.log(error);
        toast.show(error.message, {
          type: "danger",
          placement: "top",
          duration: 3000,
        });
      });
  };

  const handleLogin = () => {
    console.log("Login");
    setUser(userData);
    auth
      .signInWithEmailAndPassword(user.email.trim(), user.password.trim())
      .then((user) => {
        console.log(user);
        setUser(user);
        toast.show("Login Successful", {
          type: "success",
          placement: "top",
          duration: 3000,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.show("Invalid Email or Password", {
          type: "danger",
          placement: "top",
          duration: 3000,
        });
      });
  };

  //to navigate to home screen
  const handleHome = () => {
    navigation.navigate("Home");
  };

  //to manage the login and register
  const handleSwitch = () => {
    setIsLogin(!isLogin);
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
              placeholderTextColor={"#fff"}
              keyboardType='ascii-capable'
              secureTextEntry={true}
            />
            {!isLogin ? (
              <TextInput
                style={style.input}
                placeholder='Confirm Password'
                onChangeText={(text) =>
                  setUser({ ...user, confirmPassword: text })
                }
                value={user.confirmPassword}
                secureTextEntry={true}
              />
            ) : null}
          </View>
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={style.forgetPassword} onPress={handleSwitch}>
              {isLogin ? "Create Account" : "Already have an Account"}
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
