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
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import places from "../consts/places.js";
import COLORS from "../consts/colors.js";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground, ScrollView } from "react-native-web";
const { width } = Dimensions.get("screen");
import TravelApi from "../API/TravelApi.js";

export default function Home() {
  //to get data from travel api
  const [results, setResults] = React.useState();
  const [errorMessage, setErrorMessage] = React.useState("");

  const getTravelApi = async () => {
    try {
      const response = await TravelApi.get(
        "/search?key=C149CE27571A43A7B13FF0EFA9777EB3&searchQuery=lahore&language=en"
      );
      setResults(response.data);
      console.log(response.data);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  React.useEffect(() => {
    getTravelApi();
  }, []);

  const navigation = useNavigation();

  const CategoryIcons = [
    <Icon name='flight' size={25} color={COLORS.primary} />,
    <Icon name='beach-access' size={25} color={COLORS.primary} />,
    <Icon name='near-me' size={25} color={COLORS.primary} />,
    <Icon name='place' size={25} color={COLORS.primary} />,
  ];
  const ListCategories = () => {
    return (
      <View style={styles.categoryContainer}>
        {CategoryIcons.map((icon, index) => (
          <View key={index} style={styles.iconContainer}>
            {icon}
          </View>
        ))}
      </View>
    );
  };

  const Card = ({ place }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("DetailsScreen", place)}
      >
        <ImageBackground style={styles.cardImage} source={place.image}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 20,
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
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Icon name='place' size={20} color={COLORS.white} />
              <Text style={{ marginLeft: 5, color: COLORS.white }}>
                {place.location}
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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar translucent={false} />
      <View style={styles.headerStyle}>
        <Icon name='sort' size={28} color={"white"} />
        <Icon name='notifications-none' size={28} color={"white"} />
      </View>
      <ScrollView showVerticalScrollIndicator={false}>
        <View style={styles.scrollViewStyle}>
          <Text style={styles.headerTitle}>Explore the</Text>
          <Text style={styles.headerTitle}>Beautiful places</Text>
          <View style={styles.inputContainer}>
            <Icon name='search' size={28} />
            <TextInput placeholder='Search Places' style={{ color: "grey" }} />
          </View>
        </View>
        <ListCategories />
        <Text style={styles.sectionTitle}>Places</Text>
        <View>
          <FlatList
            contentContainerStyle={{ paddingLeft: 20 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={places}
            renderItem={({ item }) => <Card place={item} />}
          />
          <Text style={styles.sectionTitle}>Recommended</Text>
          <FlatList
            snapToInterval={width - 20}
            contentContainerStyle={{ paddingLeft: 20, paddingBottom: 20 }}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={places}
            renderItem={({ item }) => <RecommendedCard place={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: COLORS.primary,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  scrollViewStyle: {
    height: 120,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 23,
    color: "white",
  },
  inputContainer: {
    height: 60,
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    position: "absolute",
    top: 90,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  categoryContainer: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    height: 60,
    width: 60,
    backgroundColor: "#D3D3D3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  sectionTitle: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
  cardImage: {
    height: 200,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  recommendedCardImage: {
    width: width - 40,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: "hidden",
    padding: 10,
  },
});
