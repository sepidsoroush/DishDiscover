import React, { useEffect, useLayoutEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import useFetch from "../hooks/useFetch";
import { LeftArrow } from "../components/Icons";

const ShowScreen = ({ route }) => {
  const id = route.params.id;
  const navigation = useNavigation();
  const { data, fetchData: fetchRecipeInfo } = useFetch();

  useEffect(() => {
    fetchRecipeInfo(`/recipes/${id}/information`, {});
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
    <View style={styles.container}>
      <Image source={{ uri: data.image }} style={styles.image} />
      <Text style={styles.name}>{data.title}</Text>
      <Text style={styles.info}>
        {data.readyInMinutes} mins, {data.servings} servings
      </Text>
      <Text style={styles.info}>{data.summary}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
  info: {
    color: "gray",
  },
});

export default ShowScreen;
