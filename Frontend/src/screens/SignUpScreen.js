import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AuthForm from "../components/AuthForm";
import { useAuthContext } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
  const { signUp, error, loading, clearErrorMessage } = useAuthContext();
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      clearErrorMessage();
    });
    return unsubscribe;
  }, [navigation, clearErrorMessage]);

  return (
    <View style={styles.container}>
      <AuthForm
        type="Sign up"
        onSubmit={signUp}
        errorMessage={error}
        loading={loading}
      />
      <TouchableOpacity
        style={styles.contentView}
        onPress={() => navigation.navigate("Signin")}
      >
        <Text>Already have an account? </Text>
        <Text style={styles.link}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
  contentView: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 10,
  },
  link: {
    color: "#43be64",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default SignupScreen;
