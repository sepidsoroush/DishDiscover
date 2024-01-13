import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AuthForm from "../components/AuthForm";
import { useAuthContext } from "../context/AuthContext";

const SigninScreen = () => {
  const { signIn, error, loading, clearErrorMessage } = useAuthContext();
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
        type="Sign In"
        onSubmit={signIn}
        errorMessage={error}
        loading={loading}
      />

      <TouchableOpacity
        style={styles.contentView}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text>Don't have an account? </Text>
        <Text style={styles.link}>Create Account</Text>
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

export default SigninScreen;
