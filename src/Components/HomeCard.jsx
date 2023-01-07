import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import COLORS from "../consts/colors.js";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import TravelApi from "../API/TravelApi.js";
import { useEffect } from "react";
import DetailsScreen from "../Screens/DetailsScreen.jsx";
const { width } = Dimensions.get("screen");

export default function HomeCard({ id }) {
  const navigator = useNavigation();
  const [details, setDetails] = React.useState([]);
  const [image, setImage] = React.useState();
  ///location/{locationId}/details

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

  const handleClick = () => {
    navigator.navigate("DetailsScreen", { details, image });
  };
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <TouchableOpacity onPress={handleClick}>
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
            <View style={{ flexDirection: "column" }}>
              <Icon name='place' size={20} color={COLORS.white} />
              <Text style={{ marginLeft: 5, color: COLORS.white }}>
                {details?.address_obj?.address_string}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Icon name='star' size={20} color={"yellow"} />
              <Text style={{ marginLeft: 5, color: COLORS.white }}>
                {details?.rating}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </ScrollView>
  );
}

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
