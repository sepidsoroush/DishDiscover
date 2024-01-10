import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import { useAuthContext } from "../context/AuthContext";
// import app from "../../firebaseConfig";
// import {
//   getAuth,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
// } from "firebase/auth";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, signIn, signUp } = useAuthContext();
  //   const [loading, setLoading] = useState(false);
  //   const auth = getAuth(app);

  //   const signIn = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await signInWithEmailAndPassword(auth, email, password);
  //       console.log(response);
  //     } catch (error) {
  //       console.log(error);
  //       alert("SignIn failed: " + error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   const signUp = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await createUserWithEmailAndPassword(
  //         auth,
  //         email,
  //         password
  //       );
  //       console.log(response);
  //       alert("Check your emails!");
  //     } catch (error) {
  //       console.log(error);
  //       alert("SignUp failed: " + error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          autoCapitalize="none"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <Button onPress={() => signIn(email, password)} title="SignIn" />
            <Button
              onPress={() => signUp(email, password)}
              title="Create Account"
            />
          </>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "center",
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
});

export default LoginScreen;
