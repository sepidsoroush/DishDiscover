import React, { useState, useEffect } from "react";
import { FlatList, View, TouchableOpacity, StyleSheet } from "react-native";
import { Spacer, Header } from "../../UI";
import { Categories } from "../utilities/Categories";
import { DishCard } from "../cards/DishCard";
import { useRecipesContext } from "../../../context/RecipesContext";

export const PopularCategory = () => {
  const [params, setParams] = useState({ cuisine: "italian" });
  const { complexSearch, onComplexSearch } = useRecipesContext();

  useEffect(() => {
    onComplexSearch("/recipes/complexSearch", params);
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
          data={complexSearch.results}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={styles.card}
                onPress={() => console.log(item)}
              >
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
  card: {
    marginRight: 15,
    marginTop: 12,
    height: 250,
  },
});
