import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { appRouteNames } from "./data";
import UserWelcomeScreen from "./screens/WelcomeScreen";
import HomePageScreen from "./screens/HomePageScreen";
import { AppHeader } from "./components";
import SearchScreen from "./screens/SearchScreen";
import NotificationScreen from "./screens/NotificationScreen";

const Routes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={appRouteNames.homePageScreen}>
        <Stack.Screen
          options={{ headerShown: false }}
          name={appRouteNames.welcomeScreen}
          component={UserWelcomeScreen}
        />
        <Stack.Screen
          options={({ navigation }) => {
            return {
              header: () => <AppHeader navigation={navigation} />,
            };
          }}
          name={appRouteNames.homePageScreen}
          component={HomePageScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={appRouteNames.searchScreen}
          component={SearchScreen}
        />

        <Stack.Screen
          options={({ navigation }) => {
            return {
              header: () => <AppHeader navigation={navigation} />,
            };
          }}
          name={appRouteNames.notificationScreen}
          component={NotificationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
