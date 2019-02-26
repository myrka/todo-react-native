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
    modalVisible: false,
  };

  clearTodoText = () => {
    this.setState({
      newTodoText: ''
    });
  };

  closeModal = () => {
    this.setState({
      modalVisible: false,
    })
  };

  render() {
    return (
      <TodoAppContext.Consumer>
        {
          ({ todos, removeTodo, updateTodo, addTodo }) => (
              <View style={{flex: 1, position: 'relative'}}>
                <TodoList
                    todoList={todos}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => this.setState({modalVisible: true})}
                >
                  <Icon.Ionicons
                      name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}
                      size={25}
                      color="#ffffff"
                  />
                  <Modal
                      animationType="slide"
                      transparent={false}
                      visible={this.state.modalVisible}
                      style={{flex: 0.5}}
                      onRequestClose={() => {
                        this.clearTodoText();
                        this.closeModal();
                      }}>
                    <View style={{margin: 22}}>
                      <Text
                          style={{fontSize: 16, marginBottom: 15 }}
                          selectable={true}
                          selectionColor="#ff00ff"
                      > Add your Todo item </Text>
                      <TextInput
                          autoFocus
                          style={styles.input}
                          value={this.state.newTodoText}
                          onChangeText={(text) => this.setState({ newTodoText: text })}
                          onEndEditing={() => {
                            addTodo(this.state.newTodoText);
                            this.clearTodoText();
                            this.closeModal();
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
  addButton: {
    display: 'flex',
    position: 'absolute',
    bottom: 15,
    right: 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    borderRadius: 50/2,
    backgroundColor: '#71ce94',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
  }
});
