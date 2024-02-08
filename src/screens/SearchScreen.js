import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRecipesContext } from "../context/RecipesContext";
import { ResultsDetail, SearchBar } from "../components/features";
import { Spacer } from "../components/UI";
import { FilterIcon } from "../components/Icons";

const SearchScreen = ({ route }) => {
  const navigation = useNavigation();
  const [term, setTerm] = useState("");
  const { complexSearch, onComplexSearch } = useRecipesContext();

  useEffect(() => {
    if (route.params) {
      onComplexSearch("/recipes/complexSearch", route.params.selectedFilters);
    }
  }, [route]);

  const searchHandler = () => {
    onComplexSearch("/recipes/complexSearch", {
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
        data={complexSearch.results}
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
