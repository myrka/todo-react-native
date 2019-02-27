import { Icon } from 'expo';
import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, View, Text, TextInput, Modal } from 'react-native';
import { TodoAppContext } from '../app-context';
import { TodoList } from '../components/TodoList';

export default class AllTodosScreen extends React.Component {
  static navigationOptions = {
    title: 'All todos',
  };

  state = {
    newTodoText: '',
    isModalVisible: false,
  };

  clearTodoText = () => {
    this.setState({
      newTodoText: '',
    });
  };

  hideModal = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  closeModalView = () => {
    this.clearTodoText();
    this.hideModal();
  };

  render() {
    const {
      isModalVisible,
      newTodoText,
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
                <Modal
                  animationType="slide"
                  transparent={false}
                  visible={isModalVisible}
                  onRequestClose={this.closeModalView}
                >
                  <View style={styles.modalContainer}>
                    <Text
                      style={styles.label}
                      selectable={true}
                      selectionColor="#ff00ff"
                    > Add your Todo item </Text>
                    <TextInput
                      autoFocus
                      style={styles.input}
                      value={newTodoText}
                      onChangeText={(text) => this.setState({ newTodoText: text })}
                      onEndEditing={() => {
                        addTodo(newTodoText);
                        this.closeModalView();
                      }}
                    />
                  </View>
                </Modal>
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
  modalContainer: {
    margin: 25,
  },
  label: {
    fontSize: 16,
    marginBottom: 15,
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
  },
});
