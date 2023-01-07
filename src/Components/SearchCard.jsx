import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import COLORS from "../consts/colors.js";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import TravelApi from "../API/TravelApi.js";
import { useEffect } from "react";
import DetailsScreen from "../Screens/DetailsScreen.jsx";

export default function SearchCard({ id }) {
  const navigator = useNavigation();
  const [details, setDetails] = React.useState();
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
    <TouchableOpacity onPress={handleClick}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.image}
            source={{ uri: image?.small.url }}
            resizeMode={"cover"}
          />
        </View>
        <View style={styles.CardDetails}>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={[styles.text, styles.title]}>{details?.name}</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon name='star-rate' size={20} color={"yellow"} />
              <Text style={[styles.text, styles.subtitle]}>
                {details?.rating}
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "start",
              marginTop: 20,
            }}
          >
            <Icon name='place' size={20} color={COLORS.primary} />
            <Text style={[styles.text, styles.subtitle]}>
              {details?.address_obj.address_string}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    marginHorizontal: 5,
    marginVertical: 5,
  },
  imgContainer: {
    width: 150,
    height: 95,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 2,
  },
  text: {
    color: "#474747",
    fontFamily: "Poppins_400Regular",
    marginLeft: 4,
  },
  title: {
    fontSize: 18,
    width: 170,
    flexWrap: "wrap",
  },
  subtitle: {
    fontSize: 12,
    color: "#808080",
  },
  icon: {
    position: "absolute",
    right: 15,
  },
  CardDetails: {
    justifyContent: "space-around",
    marginLeft: 5,
    flex: 1,
  },
});
