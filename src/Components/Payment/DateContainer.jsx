import { View, Text, StyleSheet } from "react-native";
import React from "react";
import COLORS from "../../consts/colors";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function DateContainer() {
  return (
    <View style={styles.dateContainer}>
      <Text style={{ fontSize: 20, fontWeight: "bold", margin: 20 }}>
        Date and Guest
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "start",
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
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          margin: 20,
          alignItems: "center",
          justifyContent: "start",
        }}
      >
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
  );
}

const styles = StyleSheet.create({
  dateContainer: {
    marginTop: 8,
    height: 240,

    backgroundColor: COLORS.white,
    overflow: "hidden",
  },
  dateAlert: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#474747",
    paddingHorizontal: 20,
    textAlign: "center",
  },
});
