import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { initialTodos, TodoAppContext, filterTodos } from './app-context';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.removeTodo = (todoId) => {
      this.setState((state) => {
        const newTodos = [...state.todos];
        const todoIndex = newTodos.findIndex((todo) => todo.id === todoId);
        newTodos.splice(todoIndex, 1);

        const { todos, completedTodos, activeTodos } = filterTodos(newTodos);
        return { todos, completedTodos, activeTodos }
      })
    };

    this.updateTodo = (todoId) => {
      this.setState((state) => {
        const newTodos = [...state.todos];
        const checkedItem = newTodos.find((todo) => todo.id === todoId);
        checkedItem.isCompleted = !checkedItem.isCompleted;
        const { todos, completedTodos, activeTodos } = filterTodos(newTodos);
        return { todos, completedTodos, activeTodos }
      })
    };

    const { todos, completedTodos, activeTodos } = filterTodos(initialTodos);
    this.state = {
      todos,
      completedTodos,
      activeTodos,
      removeTodo: this.removeTodo,
      updateTodo: this.updateTodo,
    };
  }

  render() {
      return (
          <TodoAppContext.Provider value={this.state}>
            <View style={styles.container}>
              {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
              <AppNavigator/>
            </View>
          </TodoAppContext.Provider>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
