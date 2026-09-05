import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, Platform } from 'react-native';

import ChatScreen from './src/screens/ChatScreen';
import AnalyticsScreen from './src/screens/AnalyticsScreen';
import AdaptiveScreen from './src/screens/AdaptiveScreen';
import RewardsScreen from './src/screens/RewardsScreen';
import LeaderboardScreen from './src/screens/LeaderboardScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#378ADD',
          tabBarInactiveTintColor: '#888780',
          tabBarStyle: {
            backgroundColor: '#ffffff',
            borderTopWidth: 0.5,
            borderTopColor: '#E0E0E0',
            paddingBottom: Platform.OS === 'ios' ? 20 : 8,
            paddingTop: 8,
            height: Platform.OS === 'ios' ? 80 : 60,
          },
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '500',
          },
        }}
      >
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarLabel: 'Chat',
            tabBarIcon: ({ color }) => (
              <View style={{ fontSize: 20 }}>💬</View>
            ),
          }}
        />
        <Tab.Screen
          name="Analytics"
          component={AnalyticsScreen}
          options={{
            tabBarLabel: 'Stats',
            tabBarIcon: ({ color }) => (
              <View style={{ fontSize: 20 }}>📊</View>
            ),
          }}
        />
        <Tab.Screen
          name="Adaptive"
          component={AdaptiveScreen}
          options={{
            tabBarLabel: 'AI',
            tabBarIcon: ({ color }) => (
              <View style={{ fontSize: 20 }}>🤖</View>
            ),
          }}
        />
        <Tab.Screen
          name="Rewards"
          component={RewardsScreen}
          options={{
            tabBarLabel: 'Rewards',
            tabBarIcon: ({ color }) => (
              <View style={{ fontSize: 20 }}>🎁</View>
            ),
          }}
        />
        <Tab.Screen
          name="Leaderboard"
          component={LeaderboardScreen}
          options={{
            tabBarLabel: 'Top 5',
            tabBarIcon: ({ color }) => (
              <View style={{ fontSize: 20 }}>🏆</View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});
