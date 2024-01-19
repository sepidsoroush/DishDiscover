import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { AuthProvider, useAuthContext } from "./src/context/AuthContext";
import { DatabaseProvider } from "./src/context/DatabaseContext";

import SigninScreen from "./src/screens/SignInScreen";
import SignupScreen from "./src/screens/SignUpScreen";
import TabNavigator from "./src/screens/BottomTabNavigator";

const Stack = createNativeStackNavigator();

function LoginFlow() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

const App = () => {
  const { user } = useAuthContext();

  return (
    <NavigationContainer>
      {user ? <TabNavigator /> : <LoginFlow />}
    </NavigationContainer>
  );
};

export default () => {
  return (
    <AuthProvider>
      <DatabaseProvider>
        <App />
      </DatabaseProvider>
    </AuthProvider>
  );
};
