import React, { useEffect } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDatabaseContext } from "../context/DatabaseContext";
import useFetch from "../hooks/useFetch";
import Spacer from "./UI/Spacer";
import Header from "./UI/Header";
import ResultsDetail from "./ResultsDetail";

const SavedList = () => {
  const navigation = useNavigation();
  const { bookmarkedIds } = useDatabaseContext();
  const { data, fetchData: fetchRecipesByIds } = useFetch();

  useEffect(() => {
    if (bookmarkedIds.length > 0) {
      const idsParam = bookmarkedIds.join(",");
      fetchRecipesByIds(`/recipes/informationBulk?ids=${idsParam}`, {});
    }
  }, [bookmarkedIds]);

  return (
    <>
      <Spacer>
        <Header moreLink={true}>Saved Recipes 💚</Header>
      </Spacer>
      <View style={styles.container}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          initialNumToRender={10}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("Show", { id: item.id })}
              >
                <ResultsDetail result={item} />
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

export default SavedList;
