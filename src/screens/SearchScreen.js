import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import useFetch from "../hooks/useFetch";
import ResultsDetail from "../components/ResultsDetail";
import SearchBar from "../components/SearchBar";
import Spacer from "../components/UI/Spacer";
import { FilterIcon } from "../components/Icons";

const SearchScreen = ({ route }) => {
  const navigation = useNavigation();

  const [term, setTerm] = useState("");

  const {
    data,
    loading,
    errorMessage,
    fetchData: fetchComplexSearch,
  } = useFetch();

  useEffect(() => {
    if (route.params) {
      fetchComplexSearch(
        "/recipes/complexSearch",
        route.params.selectedFilters
      );
    }
  }, [route]);

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
      <FlatList
        style={{ marginBottom: 60 }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        initialNumToRender={10}
        numColumns={2}
        data={data.results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <ResultsDetail result={item} bookmark={true} />
            </TouchableOpacity>
          );
        }}
      />
    </Spacer>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
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
