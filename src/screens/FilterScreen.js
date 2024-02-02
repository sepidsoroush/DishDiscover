import React, { useState, useLayoutEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LeftArrow } from "../components/Icons";
import InactiveLabel from "../components/StyledComponents/InactiveLabel";
import ActiveLabel from "../components/StyledComponents/ActiveLabel";
import Header from "../components/UI/Header";
import Spacer from "../components/UI/Spacer";

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

const FilterScreen = () => {
  const navigation = useNavigation();
  const [filterStates, setFilterStates] = useState(() => {
    const initialState = {};
    categories.forEach((category) => {
      category.filters.forEach((filter) => {
        initialState[filter.id] = false;
      });
    });
    return initialState;
  });

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

  return (
    <SafeAreaView style={styles.container}>
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
                renderItem={({ item }) =>
                  filterStates[item.id] ? (
                    <ActiveLabel
                      onPress={() => {
                        toggleFilter(item.id);
                      }}
                    >
                      {item.title}
                    </ActiveLabel>
                  ) : (
                    <InactiveLabel
                      onPress={() => {
                        toggleFilter(item.id);
                      }}
                    >
                      {item.title}
                    </InactiveLabel>
                  )
                }
              />
            </Spacer>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filterContainer: {
    marginVertical: 10,
  },
});

export default FilterScreen;
