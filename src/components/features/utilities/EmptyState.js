import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import NoResults from "../../../assets/NoResult.png";
import { RightArrow } from "../../Icons";

const ScreenHeight = Dimensions.get("window").height * 0.85;

export const EmptyState = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={NoResults} style={styles.image} />

      <Text style={styles.title}>You haven't save anything!</Text>
      <Text style={styles.text}>
        Explore more dishes and save them to see them here.
      </Text>
      <TouchableOpacity
        style={styles.link}
        onPress={() => navigation.navigate("ExploreFlow")}
      >
        <Text style={styles.linkText}>Go Explore</Text>
        <RightArrow fill="#E23E3E" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: ScreenHeight,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  image: {
    width: "80%",
    height: 150,
    borderRadius: 12,
    marginVertical: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  text: {
    width: "75%",
    textAlign: "center",
    marginVertical: 14,
    color: "#797979",
  },
  link: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  linkText: {
    fontWeight: "700",
    fontSize: 16,
    color: "#E23E3E",
  },
});
