import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { appRouteNames } from "./data";
import UserWelcomeScreen from "./screens/WelcomeScreen";
import HomePageScreen from "./screens/HomePageScreen";
import { AppHeader } from "./components";
import SearchScreen from "./screens/SearchScreen";
import NotificationScreen from "./screens/NotificationScreen";
import VideoScreen from "./screens/VideoScreen";

const Routes = () => {
  const Stack = createNativeStackNavigator();

  const defaultHeaderOptions = ({ navigation }) => {
    return {
      header: () => <AppHeader navigation={navigation} />,
    };
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={appRouteNames.videoScreen}>
        <Stack.Screen
          options={{ headerShown: false }}
          name={appRouteNames.welcomeScreen}
          component={UserWelcomeScreen}
        />
        <Stack.Screen
          options={defaultHeaderOptions}
          name={appRouteNames.homePageScreen}
          component={HomePageScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={appRouteNames.searchScreen}
          component={SearchScreen}
        />

        <Stack.Screen
          options={defaultHeaderOptions}
          name={appRouteNames.notificationScreen}
          component={NotificationScreen}
        />

        <Stack.Screen
          options={defaultHeaderOptions}
          name={appRouteNames.videoScreen}
          component={VideoScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
