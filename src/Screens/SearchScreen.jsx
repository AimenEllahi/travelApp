import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import SearchCard from "../Components/SearchCard.jsx";
import TravelApi from "../API/TravelApi.js";

export default function SearchScreen() {
  const navigation = useNavigation();
  const [results, setResults] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  const handleSearch = async () => {
    console.log("Going to search");
    const response = await TravelApi.get("/search", {
      params: {
        key: "C149CE27571A43A7B13FF0EFA9777EB3",
        searchQuery: searchQuery,
        language: "en",
      },
    });
    console.log("response", response.data.data);
    setResults(response.data.data);
  };

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder='Search'
        onChangeText={onChangeSearch}
        value={searchQuery}
        onSubmitEditing={handleSearch}
        style={{
          backgroundColor: "#fff",
        }}
      />
      <ScrollView
        style={styles.resultsContainer}
        showsVerticalScrollIndicator={false}
      >
        {results.map((result, index) => {
          return (
            <SearchCard key={index} id={result.location_id} result={result} />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  resultsContainer: {
    marginTop: 10,
  },
});
