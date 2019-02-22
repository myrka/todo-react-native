import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ActiveTodosScreen from '../screens/ActiveTodosScreen';
import CompletedTodosScreen from '../screens/CompletedTodosScreen';
import AllTodosScreen from '../screens/AllTodosScreen';

const ActiveTodosStack = createStackNavigator({
  Active: ActiveTodosScreen,
});

ActiveTodosStack.navigationOptions = {
  tabBarLabel: 'Active',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-clipboard'}`
          : 'md-clipboard'
      }
    />
  ),
};

const CompletedTodosStack = createStackNavigator({
  Completed: CompletedTodosScreen,
});

CompletedTodosStack.navigationOptions = {
  tabBarLabel: 'Completed',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-checkmark-circle-outline' : 'md-checkmark-circle-outline'}
    />
  ),
};

const AllTodosStack = createStackNavigator({
  All: AllTodosScreen,
});

AllTodosStack.navigationOptions = {
  tabBarLabel: 'All',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-paper' : 'md-paper'}
    />
  ),
};

export default createBottomTabNavigator({
  AllTodosStack,
  ActiveTodosStack,
  CompletedTodosStack,
});
