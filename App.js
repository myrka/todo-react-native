import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';

const deafaultTodos = [
  {
    id: 1,
    label: 'Todo 1',
    isCompleted: false,
  },{
    id: 2,
    label: 'Todo 2',
    isCompleted: true,
  },{
    id: 3,
    label: 'Todo 3',
    isCompleted: true,
  },{
    id: 4,
    label: 'Todo 4',
    isCompleted: false,
  },{
    id: 5,
    label: 'Todo 5',
    isCompleted: true,
  },{
    id: 6,
    label: 'Todo 6',
    isCompleted: false,
  },
];

export const TodoAppContext = React.createContext({
  todoList: deafaultTodos,
  updateTodo: () => {},
  addTodo: () => {},
  removeTodo: () => {},
});

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in ActiveTodosScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
