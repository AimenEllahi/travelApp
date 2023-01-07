import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import places from "../consts/places.js";
import COLORS from "../consts/colors.js";
import Icon from "react-native-vector-icons/MaterialIcons";
import TopContainer from "../Components/Payment/TopContainer.jsx";
import DateContainer from "../Components/Payment/DateContainer.jsx";
import PaymentContainer from "../Components/Payment/PaymentContainer.jsx";

export default function Payment() {
  return (
    <View>
      <TopContainer />
      <DateContainer />
      <PaymentContainer />

 
    </View>
  );
}

const styles = StyleSheet.create({

  
});
