import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LandingPage() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>This is the home screen</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.text}>Go to Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={styles.text}>Go to SignIn</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "#0008c1",
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  text: {
    color: "#fff",
  },
});
