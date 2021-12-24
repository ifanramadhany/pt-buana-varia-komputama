import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { HomeScreen, CreateMemberScreen, OrganizationalChartScreen } from ".";

export default function MainScreen() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "HomeScreen") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "CreateMemberScreen") {
            iconName = focused ? "person-add" : "person-add-outline";
          } else if (route.name === "OrganizationalChartScreen") {
            iconName = focused ? "people-circle" : "people-circle-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={27} color={color} />;
        },
        tabBarActiveTintColor: "#0ACF83",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="CreateMemberScreen" component={CreateMemberScreen} />
      <Tab.Screen name="OrganizationalChartScreen" component={OrganizationalChartScreen} />
    </Tab.Navigator>
  );
}
