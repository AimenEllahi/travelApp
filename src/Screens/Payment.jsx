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

export default function Payment() {
  return (
    <View>
      <View style={styles.topContainer}>
        <Image
          style={styles.cardImage}
          source={require("../assets/location1.jpg")}
        ></Image>
        <View style={styles.topDesc}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Lago di Braies, Braies
          </Text>
          <Icon name='location-on' size={25} color={COLORS.primary} />
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "#474747",
            }}
          >
            Location Description
          </Text>
        </View>
      </View>
      <View style={styles.dateContainer}>
        <Text style={{ fontSize: 20, fontWeight: "bold", margin: 20 }}>
          Date and Guest
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",

            margin: 20,
          }}
        >
          <Icon name='date-range' size={25} color={COLORS.primary} />
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "#474747",
              paddingHorizontal: 20,
            }}
          >
            10 - 12 May 2021
          </Text>
          <Icon
            name='arrow-forward-ios'
            style={{ marginLeft: 100 }}
            size={20}
            color={COLORS.primary}
          />
        </View>
        <Text style={styles.dateAlert}>
          {" "}
          Make sure to check in your date before
          <br /> making any sort of payments
        </Text>
        <View style={{ display: "flex", flexDirection: "row", margin: 20 }}>
          <Icon name='person-add-alt-1' size={25} color={COLORS.primary} />
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "#474747",
              paddingHorizontal: 20,
            }}
          >
            2 Guests
          </Text>

          <Icon
            name='arrow-forward-ios'
            style={{ marginLeft: 160 }}
            size={20}
            color={COLORS.primary}
          />
        </View>
      </View>
      <View style={styles.paymentContainer}>
        <Text style={{ fontSize: 20, fontWeight: "bold", margin: 20 }}>
          Payment
        </Text>
        <View style={{ display: "flex", flexDirection: "row", margin: 20 }}>
          <Icon name='credit-card' size={25} color={COLORS.primary} />
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "#474747",
              paddingHorizontal: 20,
            }}
          >
            Credit Card
          </Text>
          <Icon
            name='arrow-forward-ios'
            style={{ marginLeft: 140 }}
            size={20}
            color={COLORS.primary}
          />
        </View>
        <View style={{ display: "flex", flexDirection: "row", margin: 20 }}>
          <Icon name='attach-money' size={25} color={COLORS.primary} />
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "#474747",
              paddingHorizontal: 20,
            }}
          >
            Total Price
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "#474747",
              paddingHorizontal: 20,
              marginLeft: 100,
            }}
          >
            $ 100
          </Text>
        </View>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: COLORS.primary,
              height: 50,
              width: 300,
              borderRadius: 10,
              margin: 20,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: COLORS.white, fontSize: 20 }}>Pay Now</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    height: 200,
    width: 360,
    backgroundColor: COLORS.white,
    display: "flex",
    flexDirection: "row",
  },
  cardImage: {
    height: 150,
    width: 120,
    objectFit: "fill",
    borderRadius: 10,
    overflow: "hidden",
    margin: 20,
  },
  topDesc: {
    height: 110,
    width: 180,
    backgroundColor: COLORS.white,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflow: "hidden",
    marginTop: 40,
  },
  dateContainer: {
    marginTop: 8,
    height: 240,
    width: 360,
    backgroundColor: COLORS.white,
    overflow: "hidden",
  },
  dateAlert: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#474747",
    paddingHorizontal: 20,
    textAlign: "left",
  },
  paymentContainer: {
    marginTop: 8,
    height: 300,
    width: 360,
    backgroundColor: COLORS.white,
    overflow: "hidden",
  },
});
