import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";
import COLORS from "../consts/colors.js";
import Icon from "react-native-vector-icons/MaterialIcons";
const { width } = Dimensions.get("screen");
const RecommendedCard = ({ place }) => {
  return (
    <ImageBackground style={styles.recommendedCardImage} source={place.image}>
      <Text
        style={{
          color: COLORS.white,
          fontSize: 22,
          fontWeight: "bold",
          marginTop: 10,
        }}
      >
        {place.name}
      </Text>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <View style={{ width: "100%", flexDirection: "row", marginTop: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <Icon name='place' size={22} color={COLORS.white} />
            <Text style={{ color: COLORS.white, marginLeft: 5 }}>
              {place.location}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Icon name='star' size={22} color={COLORS.white} />
            <Text style={{ color: COLORS.white, marginLeft: 5 }}>5.0</Text>
          </View>
        </View>
        <Text style={{ color: COLORS.white, fontSize: 13 }}>
          {place.details}
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  recommendedCardImage: {
    width: width - 40,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: "hidden",
    padding: 10,
  },
});
export default RecommendedCard;
