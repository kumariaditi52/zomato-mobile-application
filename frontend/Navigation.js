import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, StyleSheet } from 'react-native';

// Import screens
import HomeScreen from './screens/HomeScreen';
import ServicesScreen from './screens/ServicesScreen';
import ChatScreen from './screens/ChatScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#cb202d',
          tabBarInactiveTintColor: '#666',
          tabBarStyle: {
            height: 60,
            paddingBottom: 5,
            paddingTop: 5,
          },
          headerShown: false,
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({ focused }) => (
              <Text style={[styles.tabIcon, focused && styles.activeTabIcon]}>🏠</Text>
            ),
          }}
        />
        <Tab.Screen 
          name="Services" 
          component={ServicesScreen} 
          options={{
            tabBarIcon: ({ focused }) => (
              <Text style={[styles.tabIcon, focused && styles.activeTabIcon]}>🛎️</Text>
            ),
          }}
        />
        <Tab.Screen 
          name="Chat" 
          component={ChatScreen} 
          options={{
            tabBarIcon: ({ focused }) => (
              <Text style={[styles.tabIcon, focused && styles.activeTabIcon]}>💬</Text>
            ),
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{
            tabBarIcon: ({ focused }) => (
              <Text style={[styles.tabIcon, focused && styles.activeTabIcon]}>👤</Text>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    fontSize: 24,
  },
  activeTabIcon: {
    transform: [{ scale: 1.2 }],
  },
});

export default Navigation;
