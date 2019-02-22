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
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
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
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
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
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  ActiveTodosStack,
  CompletedTodosStack,
  AllTodosStack,
});
