import React, { useEffect } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import useFetch from "../hooks/useFetch";
import Spacer from "./UI/Spacer";
import Header from "./UI/Header";
import ResultsDetail from "./ResultsDetail";

const SavedList = () => {
  const navigation = useNavigation();

  const { data, fetchData: fetchComplexSearch } = useFetch();

  useEffect(() => {
    fetchComplexSearch("/recipes/random?number=10", {});
  }, []);

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
          data={data.recipes}
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
