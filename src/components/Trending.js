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
import useFetch from "../hooks/useFetch";
import Spacer from "./UI/Spacer";
import Header from "./UI/Header";
import ResultsDetail from "./ResultsDetail";

const Trending = () => {
  const navigation = useNavigation();

  const { data, fetchData: fetchComplexSearch } = useFetch();

  useEffect(() => {
    if (data.length === 0) {
      fetchComplexSearch("/recipes/random?number=10", {});
    }
  }, [data]);

  if (!data || !data.recipes) {
    return null; // todo: add loading indicator or skeleton
  }

  const filteredData = data.recipes.filter(
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
                <View style={styles.credit}>
                  <Image
                    source={require(`../assets/Profile1.png`)}
                    style={styles.profile}
                  />
                  <Text style={styles.sourceName}>By {item.sourceName}</Text>
                </View>
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

export default Trending;
