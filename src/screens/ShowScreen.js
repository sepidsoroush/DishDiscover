import React, { useEffect, useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
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

  return (
    <Spacer>
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
      <View style={styles.row}>
        <StarIcon fill="#FFB661" />
        <Text style={styles.info}>
          {Math.round(recipe.spoonacularScore / 2) / 10}
        </Text>
      </View>
      <View style={styles.row}>
        <ClockIcon fill="#C1C1C1" />
        <Text style={styles.info}>{recipe.readyInMinutes} mins,</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.info}>{recipe.servings} servings</Text>
      </View>
      <Header>Ingredients</Header>
      <FlatList
        data={recipe.extendedIngredients}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text>{"\u2022"}</Text>
              <Text style={{ paddingLeft: 5, fontWeight: "bold" }}>
                {item.amount} {item.unit}
              </Text>
              <Text> {item.name}</Text>
            </View>
          );
        }}
      />
    </Spacer>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    marginVertical: 12,
  },
  image: {
    width: "100%",
    height: 220,
    borderRadius: 12,
    marginVertical: 12,
  },
  row: {
    flexDirection: "row",
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  icon: {
    marginHorizontal: 4,
  },
  info: {
    color: "gray",
  },
});

export default ShowScreen;
