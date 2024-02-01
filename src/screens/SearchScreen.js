import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import useFetch from "../hooks/useFetch";
import SearchBar from "../components/SearchBar";
import Spacer from "../components/UI/Spacer";
import { FilterIcon } from "../components/Icons";

const SearchScreen = () => {
  const navigation = useNavigation();

  const [term, setTerm] = useState("");

  const {
    data,
    loading,
    errorMessage,
    fetchData: fetchComplexSearch,
  } = useFetch();

  useEffect(() => {
    if (data.length === 0) {
      fetchComplexSearch("/recipes/complexSearch", {});
    }
  }, [data]);

  const searchHandler = () => {
    fetchComplexSearch("/recipes/complexSearch", {
      query: term,
    });
  };
  return (
    <Spacer>
      <View style={styles.searchContainer}>
        <SearchBar
          term={term}
          onTermChange={setTerm}
          onTermSubmit={searchHandler}
        />
        <TouchableOpacity
          style={styles.filterIcon}
          onPress={() => navigation.navigate("Filters")}
        >
          <FilterIcon />
        </TouchableOpacity>
      </View>
    </Spacer>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  filterIcon: {
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    padding: 10,
  },
});

export default SearchScreen;
