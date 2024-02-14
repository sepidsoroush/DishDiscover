import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRecipesContext } from "../../../context/RecipesContext";
import { Spacer, Header } from "../../UI";
import { ResultsDetail } from "../cards/ResultsDetail";

export const Trending = () => {
  const navigation = useNavigation();
  const { randoms, onGetRandomRecipes } = useRecipesContext();

  useEffect(() => {
    if (randoms.length === 0) {
      onGetRandomRecipes("/recipes/random?number=10", {});
    }
  }, [randoms]);

  if (!randoms || !randoms.recipes) {
    return null; // todo: add loading indicator or skeleton
  }

  const filteredData = randoms.recipes.filter(
    (item) => item.spoonacularScore > 50
  );

  return (
    <>
      <Spacer>
        <Header moreLink={true}>Trending now 🔥</Header>
      </Spacer>
      <View style={styles.container}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          initialNumToRender={10}
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Show", { id: item.id })}
                >
                  <ResultsDetail result={item} />
                </TouchableOpacity>
                {/* <View style={styles.credit}>
                  <Image
                    source="https://randomuser.me/api/portraits/women/90.jpghttps://randomuser.me/api/portraits/women/90.jpg"
                    style={styles.profile}
                  />
                  <Text style={styles.sourceName}>By {item.sourceName}</Text>
                </View> */}
              </View>
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
    marginBottom: 12,
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
  },
  credit: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    bottom: 0,
  },
  profile: {
    width: 32,
    height: 32,
  },
  sourceName: {
    marginLeft: 8,
    color: "#A9A9A9",
    fontSize: 12,
  },
});
