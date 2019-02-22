import { Icon } from 'expo';
import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { TodoAppContext } from '../app-context';
import { TodoList } from '../components/TodoList';

export default class AllTodosScreen extends React.Component {
  static navigationOptions = {
    title: 'All todos',
  };

  render() {
    return (
      <TodoAppContext.Consumer>
        {
          ({ todos, removeTodo, updateTodo }) => (
              <View style={{flex: 1}}>
                <TodoList
                    todoList={todos}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => console.log('Hello world')}
                >
                  <Icon.Ionicons
                      name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}
                      size={25}
                      color="#ffffff"
                  />
                </TouchableOpacity>
              </View>
          )
        }
      </TodoAppContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  addButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    borderRadius: 50/2,
    backgroundColor: '#71ce94',
    margin: 10,
    flex: 0.4,
    alignSelf: 'flex-end'
  }
});
