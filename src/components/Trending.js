import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RightArrow } from "./Icons/GeneralIcons";
import Spacer from "./UI/Spacer";
import ResultsList from "./ResultsList";
import useFetch from "../hooks/useFetch";

const Trending = () => {
  const { data, fetchData: fetchComplexSearch } = useFetch();

  useEffect(() => {
    const callApi = async () => {
      await fetchComplexSearch("/recipes/random?number=5", {});
    };
    callApi();
    const intervalId = setInterval(callApi, 12 * 60 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Spacer>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Trending now 🔥</Text>
          <View style={styles.rightContainer}>
            <Text style={styles.headerSubtitle}>See all</Text>
            <RightArrow style={styles.headerIcon} fill="#E23E3E" />
          </View>
        </View>
      </Spacer>
      <ResultsList results={data.recipes} />
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
  rightContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerSubtitle: {
    color: "#E23E3E",
    fontSize: 14,
    fontWeight: "600",
  },
  headerIcon: {
    color: "#E23E3E",
    width: 20,
    height: 20,
  },
});

export default Trending;
