import React, { useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import COLORS from "../consts/colors.js";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import TravelApi from "../API/TravelApi.js";
const { width } = Dimensions.get("screen");
// const details = {
//   name: "Kathmandu",
//   rating: 4.5,
//   reviews: 124,
//   price: 100,
//   address_obj: { address_string: "Kathmandu, Nepal" },

//   description:
//     "Kathmandu is the capital and largest city of Nepal. In the Hindu tradition, the city is considered the spiritual and cultural home of the god Vishnu, and as such it is a center for religious devotion. The city stands at an elevation of approximately 1,400 metres (4,600 ft) above sea level in the bowl-shaped Kathmandu Valley in central Nepal, with the Himalayas as a backdrop.",
// };
const Card = ({ id }) => {
  const navigation = useNavigation();
  const [details, setDetails] = React.useState();
  const [image, setImage] = React.useState();

  useEffect(() => {
    const getDetails = async () => {
      const response = await TravelApi.get(`/${id}/details`, {
        params: {
          key: "C149CE27571A43A7B13FF0EFA9777EB3",
        },
      });
      setDetails(response.data);
    };
    getDetails();
  }, []);

  useEffect(() => {
    const getImage = async () => {
      const response = await TravelApi.get(`/${id}/photos`, {
        params: {
          key: "C149CE27571A43A7B13FF0EFA9777EB3",
          language: "en",
        },
      });
      console.log("response", response.data.data[0].images);
      setImage(response.data.data[0].images);
    };
    getImage();
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate("DetailsScreen", { details })}
    >
      <ImageBackground
        style={styles.cardImage}
        source={{ uri: image?.small.url }}
      >
      <Text
        style={{
          color: COLORS.white,
          fontSize: 20,
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
          flexDirection: "row",
          alignItems: "flex-end",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Icon name='place' size={20} color={COLORS.white} />
          <Text style={{ marginLeft: 5, color: COLORS.white }}>
            {details?.address_obj?.address_string}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Icon name='star' size={20} color={COLORS.white} />
          <Text style={{ marginLeft: 5, color: COLORS.white }}>5.0</Text>
        </View>
      </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardImage: {
    height: 200,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
});
