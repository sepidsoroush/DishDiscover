import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useFonts, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import useFetch from "../hooks/useFetch";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import Trending from "../components/Trending";
import PopularCategory from "../components/PopularCategory";
import SavedList from "../components/SavedList";
import Spacer from "../components/UI/Spacer";

const HomeScreen = () => {
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
  });
  const [term, setTerm] = useState("");

  const {
    data,
    loading,
    errorMessage,
    fetchData: fetchComplexSearch,
  } = useFetch();

  useEffect(() => {
    fetchComplexSearch("/recipes/complexSearch", {});
  }, []);

  const searchHandler = () => {
    fetchComplexSearch("/recipes/complexSearch", {
      query: term,
    });
  };

  return (
    <SafeAreaView>
      {!fontsLoaded || loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : (
        <ScrollView>
          <Spacer>
            <Text style={styles.header}>Find best recipes for cooking</Text>
          </Spacer>
          <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={searchHandler}
          />
          <Trending />
          <PopularCategory />
          <SavedList />
          {/* <ResultsList results={data.results} /> */}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // row: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   paddingVertical: 20,
  //   paddingHorizontal: 10,
  //   borderTopWidth: 1,
  //   borderColor: "gray",
  // },

  header: {
    color: "#303030",
    fontSize: 28,
    fontFamily: "Poppins_600SemiBold",
    lineHeight: 36,
  },
  icon: {
    fontSize: 24,
  },
  errorMessage: {
    color: "red",
    fontSize: 16,
    marginTop: 10,
  },
});

export default HomeScreen;
