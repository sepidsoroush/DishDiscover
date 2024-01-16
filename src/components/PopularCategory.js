import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Spacer from "./UI/Spacer";
import Categories from "./Categories";
import ResultsList from "./ResultsList";
import useFetch from "../hooks/useFetch";

const PopularCategory = () => {
  const [params, setParams] = useState({ cuisine: "italian" });
  const { data, fetchData: fetchCategorySearch } = useFetch();

  useEffect(() => {
    fetchCategorySearch("/recipes/complexSearch", params);
  }, [params]);

  return (
    <>
      <Spacer>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Popular Category</Text>
        </View>
      </Spacer>
      <Categories onParamsChange={setParams} />
      <ResultsList results={data.results} />
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
