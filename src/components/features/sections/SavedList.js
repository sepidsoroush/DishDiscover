import React, { useEffect } from "react";
import {
  FlatList,
  TouchableOpacity,
  Scrollview,
  View,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDatabaseContext } from "../../../context/DatabaseContext";
import { useRecipesContext } from "../../../context/RecipesContext";
import { Spacer, Header } from "../../UI";
import { ResultsDetail } from "../cards/ResultsDetail";
import { EmptyState } from "../utilities/EmptyState";

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
    <View style={styles.container}>
      {bookmarkedIds.length > 0 ? (
        <Spacer>
          <Header
            moreLink={horizontal}
            onPress={() => navigation.navigate("Bookmark")}
          >
            Saved Recipes 💚
          </Header>
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
            scrollEnabled={horizontal}
          />
        </Spacer>
      ) : horizontal ? null : (
        <EmptyState />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
