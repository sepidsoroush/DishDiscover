import React, { useEffect } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDatabaseContext } from "../../../context/DatabaseContext";
import { useRecipesContext } from "../../../context/RecipesContext";
import { Spacer, Header } from "../../UI";
import { ResultsDetail } from "../cards/ResultsDetail";

export const SavedList = ({ horizontal }) => {
  const navigation = useNavigation();
  const { bookmarkedIds } = useDatabaseContext();
  const { bulkInfo, onFindBulkInfo } = useRecipesContext();

  useEffect(() => {
    if (bookmarkedIds.length > 0) {
      const idsParam = bookmarkedIds.join(",");
      onFindBulkInfo(`/recipes/informationBulk?ids=${idsParam}`, {});
    }
  }, [bookmarkedIds]);

  return (
    <>
      <Spacer>
        <Header moreLink={horizontal}>Saved Recipes 💚</Header>
      </Spacer>
      <View style={styles.container}>
        <FlatList
          horizontal={horizontal}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          initialNumToRender={10}
          numColumns={horizontal ? null : 2}
          data={bulkInfo}
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
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
  },
});
