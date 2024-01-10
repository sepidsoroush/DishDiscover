import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useAuthContext } from "../context/AuthContext";
// import app from "../../firebaseConfig";
// import { getAuth } from "firebase/auth";

const AccountScreen = () => {
  const { signOut } = useAuthContext();
  // const auth = getAuth(app);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 48 }}>AccountScreen</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default AccountScreen;
