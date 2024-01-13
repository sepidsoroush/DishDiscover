import React, { useState } from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import { Text, Button, Input } from "@rneui/themed";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const AuthForm = ({ error, loading, onSubmit, type }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="enter your email"
        labelStyle={{ marginBottom: 5, color: "#2a2a2a" }}
      />

      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={
          type === "Sign In" ? "enter your password" : "create a password"
        }
        labelStyle={{ marginBottom: 5, color: "#2a2a2a" }}
        rightIcon={<Icon name="eye-outline" size={20} />}
        rightIconContainerStyle={{ paddingRight: 15 }}
      />
      {error ? <Text style={styles.errorMessage}>{error}</Text> : null}
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button
          title={type}
          onPress={() => onSubmit(email, password)}
          buttonStyle={{ backgroundColor: "rgba(39, 39, 39, 1)" }}
          containerStyle={{
            borderRadius: 10,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          titleStyle={{ color: "white", marginHorizontal: 20 }}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
});

export default AuthForm;
