import React from "react";
import { StyleSheet, Text, ScrollView, SafeAreaView } from "react-native";
import { SavedList, PopularCategory, Trending } from "../components/features";
import { Spacer } from "../components/UI";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Spacer>
          <Text style={styles.header}>Find best recipes for cooking</Text>
        </Spacer>
        <Trending />
        <PopularCategory />
        <SavedList horizontal={true} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    color: "#303030",
    fontSize: 28,
    fontWeight: "bold",
  },
});

export default HomeScreen;
