import React, { useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

import useFetch from "../hooks/useFetch";
import ResultsList from "../components/ResultsList";

const HomeScreen = () => {
  const {
    data,
    loading,
    errorMessage,
    fetchData: fetchComplexSearch,
  } = useFetch();

  useEffect(() => {
    fetchComplexSearch("/recipes/complexSearch", {});
  }, []);

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : (
        <ResultsList results={data.results} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
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
