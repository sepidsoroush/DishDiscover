import React, { useEffect, useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRecipesContext } from "../context/RecipesContext";
import {
  Vegan,
  GlutenFree,
  DairyFree,
  Economic,
  LeftArrow,
  StarIcon,
  ClockIcon,
} from "../components/Icons";
import { Spacer, Header } from "../components/UI";

const ShowScreen = ({ route }) => {
  const id = route.params.id;
  const navigation = useNavigation();
  const { recipe, onFindRecipeById } = useRecipesContext();

  useEffect(() => {
    onFindRecipeById(`/recipes/${id}/information`, {});
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <LeftArrow />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const uniqueData =
    recipe?.extendedIngredients?.filter(
      (v, i, a) => a.findIndex((v2) => v2.id === v.id) === i
    ) || [];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Spacer style={{ flex: 1 }}>
        <Text style={styles.title}>{recipe.title}</Text>
        <Image source={{ uri: recipe.image }} style={styles.image} />
        <View style={styles.iconContainer}>
          {(recipe.vegetarian || recipe.vegan) && (
            <View style={styles.icon}>
              <Vegan />
            </View>
          )}
          {recipe.glutenFree && (
            <View style={styles.icon}>
              <GlutenFree />
            </View>
          )}
          {recipe.dairyFree && (
            <View style={styles.icon}>
              <DairyFree />
            </View>
          )}
          {recipe.cheap && (
            <View style={styles.icon}>
              <Economic />
            </View>
          )}
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <StarIcon fill="#FFB661" />
            <Text style={styles.infoText}>
              {Math.round(recipe.spoonacularScore / 2) / 10}
            </Text>
          </View>
          <View style={styles.info}>
            <ClockIcon fill="#C1C1C1" />
            <Text style={styles.infoText}>{recipe.readyInMinutes} mins</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.infoText}>{recipe.servings} servings</Text>
          </View>
        </View>
        <Header style={{ marginVertical: 10 }}>Ingredients</Header>
        <FlatList
          data={uniqueData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.row}>
                <Text>{"\u2022"}</Text>
                <Text style={{ paddingLeft: 5, fontWeight: "bold" }}>
                  {item.amount} {item.unit}
                </Text>
                <Text> {item.originalName}</Text>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        />
      </Spacer>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: 220,
    borderRadius: 12,
    marginVertical: 12,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
    marginVertical: 5,
  },
  icon: {
    marginHorizontal: 4,
    marginVertical: 5,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoText: {
    color: "gray",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingVertical: 4,
  },
});

export default ShowScreen;
