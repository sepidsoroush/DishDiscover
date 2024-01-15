import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RightArrow } from "./Icons/GeneralIcons";
import Spacer from "./UI/Spacer";
import Categories from "./Categories";
import ResultsList from "./ResultsList";
import useFetch from "../hooks/useFetch";

const PopularCategory = () => {
  //   const { data, fetchData: fetchComplexSearch } = useFetch();

  //   useEffect(() => {
  //     fetchComplexSearch("/recipes/random?number=5", {});
  //   }, []);

  return (
    <>
      <Spacer>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Popular Category</Text>
        </View>
      </Spacer>
      <Categories />
      {/* <ResultsList results={data.recipes} /> */}
    </>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#303030",
  },
});

export default PopularCategory;
