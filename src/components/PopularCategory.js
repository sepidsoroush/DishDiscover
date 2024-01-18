import React, { useState, useEffect } from "react";
import { FlatList, View, TouchableOpacity, StyleSheet } from "react-native";
import Spacer from "./UI/Spacer";
import Header from "./UI/Header";
import Categories from "./Categories";
import DishCard from "./DishCard";
import useFetch from "../hooks/useFetch";

const PopularCategory = () => {
  const [params, setParams] = useState({ cuisine: "italian" });
  const { data, fetchData: fetchCategorySearch } = useFetch();

  useEffect(() => {
    fetchCategorySearch("/recipes/complexSearch", params);
  }, [params]);

  return (
    <>
      <Spacer>
        <Header moreLink={false}>Popular Category</Header>
      </Spacer>
      <Categories onParamsChange={setParams} />
      <View style={styles.container}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          initialNumToRender={10}
          data={data.results}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => console.log(item)}>
                <DishCard result={item} />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
  },
});

export default PopularCategory;
