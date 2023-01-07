import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import COLORS from "../../consts/colors.js";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function PaymentContainer() {
  return (
    <View style={styles.paymentContainer}>
      <Text style={{ fontSize: 20, fontWeight: "bold", margin: 20 }}>
        Payment
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
      {/* Dont you think you should make everything using stylesheet rather then giving separate classes */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          margin: 20,
          alignItems: "center",
          justifyContent: "start",
        }}
      >
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
  );
}

const styles = StyleSheet.create({
  paymentContainer: {
    marginTop: 8,
    height: 300,
    backgroundColor: COLORS.white,
    overflow: "hidden",
  },
});
