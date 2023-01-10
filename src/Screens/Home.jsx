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
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import places from "../consts/places.js";
import COLORS from "../consts/colors.js";
import HomeCard from "../Components/HomeCard.jsx";
import RecommendedCard from "../Components/RecommendedCard.jsx";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native-web";
import TravelApi from "../API/TravelApi.js";
import { auth } from "../Firebase/Firebase";
import { useToast } from "react-native-toast-notifications";
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
  const toast = useToast();
  //to get data from travel api
  const [results, setResults] = React.useState();
  const [errorMessage, setErrorMessage] = React.useState("");
  const [user, setUser] = useState(null);

  //to handle Logout
  const handleLogout = () => {
    auth

      .signOut()
      .then(() => {
        // Sign-out successful.
        console.log("Sign-out successful.");
        toast.show("You have been successfully logged out", {
          type: "success",
          placement: "top",
          duration: 3000,
        });
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        setUser(null);
      }
    });
  });

  useEffect(() => {
    const getPlaces = async () => {
      try {
        const response = await TravelApi.get("/search", {
          params: {
            key: "C149CE27571A43A7B13FF0EFA9777EB3",
            searchQuery: "London",
            language: "en",
          },
        });
        console.log("response", response.data.data);
        setResults(response.data.data);
      } catch (err) {
        console.log(err);
        setErrorMessage("Something went wrong");
      }
    };

    getPlaces();
  }, []);

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
        <Icon name='logout' size={28} color={"white"} onPress={handleLogout} />
      </View>
      <ScrollView showVerticalScrollIndicator={false}>
        <View style={styles.scrollViewStyle}>
          <Text style={styles.headerTitle}>
            Hello,{" "}
            {user?.email.split("@")[0].charAt(0).toUpperCase() +
              user?.email.split("@")[0].slice(1)}
          </Text>
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
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              marginLeft: 20,
            }}
          >
            {results
              ? results.map((result, index) => {
                  return (
                    <HomeCard
                      key={index}
                      id={result.location_id}
                      result={result}
                    />
                  );
                })
              : null}
          </ScrollView>

          <Text style={styles.sectionTitle}>Recommended</Text>
          {/* <FlatList
            snapToInterval={width - 20}
            contentContainerStyle={{ paddingLeft: 20, paddingBottom: 20 }}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={results}
            renderItem={({ item }) => (
              <RecommendedCard id={result.location_id} result={result} />
            )}
          /> */}
          <RecommendedCard />
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
    fontSize: 20,
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
