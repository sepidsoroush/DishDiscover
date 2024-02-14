import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRecipesContext } from "../context/RecipesContext";
import { SearchBar, CategoryCard } from "../components/features";
import { Spacer } from "../components/UI";
import { FilterIcon, LeftArrow } from "../components/Icons";
import links from "../assets/categories";

const ExploreScreen = () => {
  const navigation = useNavigation();
  const [term, setTerm] = useState("");
  const [params, setParams] = useState(null);

  const { onComplexSearch, loading } = useRecipesContext();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <LeftArrow />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    if (params) {
      onComplexSearch("/recipes/complexSearch", params);
      navigation.navigate("Search Result");
    }
  }, [params]);

  const searchHandler = () => {
    onComplexSearch("/recipes/complexSearch", { query: term });
    navigation.navigate("Search Result");
  };

  const categoryHandler = (event) => {
    setParams(event.params);
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
      {loading ? (
        <ActivityIndicator
          style={styles.activityIndicator}
          size="large"
          color="#0000ff"
        />
      ) : (
        <FlatList
          style={{ marginBottom: 60 }}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          initialNumToRender={10}
          numColumns={2}
          data={links.map((link) => link.filters).flat()}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => categoryHandler(item)}>
              <CategoryCard item={item} />
            </TouchableOpacity>
          )}
        />
      )}
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

export default ExploreScreen;
