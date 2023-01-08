import React, { useEffect } from "react";
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
import TravelApi from "../API/TravelApi.js";
const RecommendedCard = () => {
  //to get from specific location id
  const [details, setDetails] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState("");

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await TravelApi.get("/193108/details", {
          params: {
            key: "C149CE27571A43A7B13FF0EFA9777EB3",
            language: "en",
          },
        });
        console.log("response", response.data);
        setDetails(response.data);
      } catch (err) {
        console.log(err);
        setErrorMessage("Something went wrong");
      }
    };

    getDetails();
  }, []);

  return (
    <ImageBackground style={styles.recommendedCardImage}>
      <Text
        style={{
          color: COLORS.white,
          fontSize: 22,
          fontWeight: "bold",
          marginTop: 10,
        }}
      >
        {details?.name}
      </Text>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <View style={{ width: "100%", flexDirection: "row", marginTop: 10 }}>
          <View style={{ flexDirection: "column" }}>
            <Icon name='place' size={22} color={COLORS.white} />
            <Text style={{ color: COLORS.white, marginLeft: 5 }}>
              {details?.address_obj?.address_string}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Icon name='star' size={22} color={"yellow"} />
            <Text style={{ color: COLORS.white, marginLeft: 5 }}>
              {details?.rating}
            </Text>
          </View>
        </View>
        <Text style={{ color: COLORS.white, fontSize: 13 }}>
          {details?.description}
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
