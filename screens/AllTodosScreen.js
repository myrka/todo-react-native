import { Icon } from 'expo';
import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, View, Text, TextInput, Modal } from 'react-native';
import { TodoAppContext } from '../app-context';
import { ModalWindow } from '../components/Modal';
import { TodoList } from '../components/TodoList';

export default class AllTodosScreen extends React.Component {
  static navigationOptions = {
    title: 'All todos',
  };

  state = {
    isModalVisible: false,
  };

  hideModal = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  closeModalView = () => {
    this.hideModal();
  };

  render() {
    const {
      isModalVisible,
    } = this.state;

    return (
      <TodoAppContext.Consumer>
        {
          ({ todos, removeTodo, updateTodo, addTodo }) => (
            <View style={styles.container}>
              <TodoList
                todoList={todos}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
              />
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => this.setState({ isModalVisible: true })}
              >
                <Icon.Ionicons
                  name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}
                  size={25}
                  color="#ffffff"
                />
                <ModalWindow
                  isOpen={isModalVisible}
                  onModalClose={this.closeModalView}
                  editingAction={addTodo}
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
  container: {
    flex: 1,
    position: 'relative',
  },
  addButton: {
    display: 'flex',
    position: 'absolute',
    bottom: 15,
    right: 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    backgroundColor: '#71ce94',
  },
});
