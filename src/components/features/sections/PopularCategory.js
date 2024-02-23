import React, { useState, useEffect } from "react";
import { FlatList, View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Spacer, Header } from "../../UI";
import { Categories } from "../utilities/Categories";
import { DishCard } from "../cards/DishCard";
import { useRecipesContext } from "../../../context/RecipesContext";

export const PopularCategory = () => {
  const navigation = useNavigation();
  const [params, setParams] = useState({ cuisine: "italian" });
  const { complexSearch, onComplexSearch } = useRecipesContext();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      onComplexSearch("/recipes/complexSearch", params);
    });
    return unsubscribe;
  }, [navigation, params]);

  return (
    <>
      <Spacer>
        <Header
          moreLink={true}
          onPress={() => navigation.navigate("ExploreFlow")}
        >
          Popular Category
        </Header>
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
                onPress={() => navigation.navigate("Show", { id: item.id })}
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
