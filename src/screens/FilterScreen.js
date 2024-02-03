import React, { useState, useLayoutEffect } from "react";
import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LeftArrow } from "../components/Icons";
import Label from "../components/UI/Label";
import Header from "../components/UI/Header";
import Spacer from "../components/UI/Spacer";
import Button from "../components/UI/Button";

const categories = [
  {
    id: 1,
    category: "cuisine",
    filters: [
      { id: 11, title: "Italian", params: { cuisine: "italian" } },
      {
        id: 12,
        title: "Mexican",
        params: { cuisine: "mexican" },
      },
      {
        id: 13,
        title: "Mediterranean",
        params: { cuisine: "mediterranean" },
      },
    ],
  },
  {
    id: 2,
    category: "type",
    filters: [
      { id: 21, title: "Salad", params: { type: "salad" } },
      {
        id: 22,
        title: "Breakfast",
        params: { type: "breakfast" },
      },
      {
        id: 23,
        title: "Soup",
        params: { type: "soup" },
      },
      {
        id: 24,
        title: "Dessert",
        params: { type: "dessert" },
      },
    ],
  },
  {
    id: 3,
    category: "diet",
    filters: [
      { id: 31, title: "Ketogenic", params: { diet: "ketogenic" } },
      {
        id: 32,
        title: "Vegan",
        params: { diet: "vegan" },
      },
    ],
  },
  {
    id: 4,
    category: "intolerances",
    filters: [{ id: 41, title: "Gluten", params: { intolerances: "gluten" } }],
  },
];

const initialFilterStates = () => {
  const initialState = {};
  categories.forEach((category) => {
    category.filters.forEach((filter) => {
      initialState[filter.id] = false;
    });
  });
  return initialState;
};

const FilterScreen = () => {
  const navigation = useNavigation();

  const [filterStates, setFilterStates] = useState(initialFilterStates);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <LeftArrow />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const toggleFilter = (filterId) => {
    setFilterStates((prevState) => ({
      ...prevState,
      [filterId]: !prevState[filterId],
    }));
  };

  const activeFilters = categories.reduce((result, category) => {
    const activeCategoryFilters = category.filters
      .filter((filter) => filterStates[filter.id])
      .map((filter) => filter.params);
    return [...result, ...activeCategoryFilters];
  }, []);

  const combineParams = (filters) => {
    const combinedParams = filters.reduce((result, filter) => {
      const filterLabel = Object.keys(filter)[0];
      if (result[filterLabel]) {
        result[filterLabel] += `,${filter[filterLabel]}`;
      } else {
        result[filterLabel] = filter[filterLabel];
      }
      return result;
    }, {});
    return combinedParams;
  };

  const combinedParams = combineParams(activeFilters);

  const applyFilter = () => {
    // console.log(combinedParams);
    navigation.navigate("Explore", { selectedFilters: combinedParams });
  };
  const cancelFilter = () => {
    setFilterStates(initialFilterStates);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(category) => category.id}
        renderItem={({ item }) => {
          return (
            <Spacer>
              <Header>By {item.category}</Header>
              <FlatList
                style={styles.filterContainer}
                horizontal
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                scrollEnabled={false}
                data={item.filters}
                keyExtractor={(filter) => filter.id}
                renderItem={({ item }) => (
                  <Label
                    active={filterStates[item.id]}
                    onPress={() => {
                      toggleFilter(item.id);
                    }}
                  >
                    {item.title}
                  </Label>
                )}
              />
            </Spacer>
          );
        }}
      />
      <Spacer>
        <View style={styles.buttonContainer}>
          <Button type="secondary" onPress={cancelFilter}>
            Cancel
          </Button>
          <Button type="primary" onPress={applyFilter}>
            Apply Filters
          </Button>
        </View>
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filterContainer: {
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
});

export default FilterScreen;
