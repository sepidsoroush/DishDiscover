import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { PostsProvider } from "./src/context/BlogContext";
import { AuthProvider, useAuthContext } from "./src/context/AuthContext";

import HomeScreen from "./src/screens/HomeScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SignInScreen";
import SignupScreen from "./src/screens/SignUpScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainFlow() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Show" component={ShowScreen} />
      <Stack.Screen name="Edit" component={EditScreen} />
    </Stack.Navigator>
  );
}

function LoginFlow() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="MainFlow"
        component={MainFlow}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Create" component={CreateScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
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
      <PostsProvider>
        <App />
      </PostsProvider>
    </AuthProvider>
  );
};
