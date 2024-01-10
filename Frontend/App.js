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
import LoginScreen from "./src/screens/Login";
import AccountScreen from "./src/screens/AccountScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function MainFlow() {
  return (
    <InsideStack.Navigator screenOptions={{ headerShown: false }}>
      <InsideStack.Screen name="MainFlow" component={HomeScreen} />
      <InsideStack.Screen name="Show" component={ShowScreen} />
      <InsideStack.Screen name="Edit" component={EditScreen} />
    </InsideStack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainFlow} />
      <Tab.Screen name="Create" component={CreateScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

const App = () => {
  const { user } = useAuthContext();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        {user ? (
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <PostsProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </PostsProvider>
  );
};
