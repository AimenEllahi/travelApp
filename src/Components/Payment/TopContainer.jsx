import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import COLORS from "../../consts/colors.js";
import Icon from "react-native-vector-icons/MaterialIcons";
export default function TopContainer({ route }) {
  const details = route.params?.details;
  const image = route.params?.image;
  return (
    <View style={styles.topContainer}>
      <Image
        style={styles.cardImage}
        source={{ uri: image?.original.url }}
      ></Image>
      <View style={styles.topDesc}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          {details?.name}
        </Text>
        <Icon name='location-on' size={25} color={COLORS.primary} />
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "#474747",
          }}
        >
          {details?.address_obj.address_string}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    height: 200,

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
});
