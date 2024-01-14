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
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={searchHandler}
      />
      {!fontsLoaded || loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : (
        <ScrollView>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Find best recipes for cooking</Text>
          </View>
          <ResultsList results={data.results} />
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
  headerContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  header: {
    marginVertical: 20,
    marginHorizontal: 22,
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
