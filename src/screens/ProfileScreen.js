import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useAuthContext } from "../context/AuthContext";

const ProfileScreen = () => {
  const { signOut } = useAuthContext();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 48 }}>ProfileScreen</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default ProfileScreen;
