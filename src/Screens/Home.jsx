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
  ScrollView,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import places from "../consts/places.js";
import COLORS from "../consts/colors.js";
import Card from "../Components/Card.jsx";
import RecommendedCard from "../Components/RecommendedCard.jsx";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native-web";
const { width } = Dimensions.get("screen");
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
export default function Home() {
  const navigation = useNavigation();
  //to get data from travel api

  const handleSearchPress = () => {
    navigation.navigate("SearchScreen");
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

          <TouchableOpacity
            style={styles.inputContainer}
            onPress={handleSearchPress}
          >
            <Icon name='search' size={28} />
            <TextInput placeholder='Search Places' style={{ color: "grey" }} />
          </TouchableOpacity>
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
});
