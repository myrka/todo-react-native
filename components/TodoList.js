import React, { Component } from 'react';
import { CheckBox, ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import { TodoAppContext } from '../app-context';
import { TODO_LIST_NAMES } from '../constants/ListNames';
import { EmptyScreen } from './EmptyScreen';
import { ModalWindow } from './Modal';

export class TodoList extends Component {
  state = {
    isModalVisible: false,
    activeTodoLabel: '',
    activeTodoId: null,
    isSettedList: false,
  };

  hideModal = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  openModal = (todoId, todoLabel) => {
    this.setState({
      activeTodoId: todoId,
      activeTodoLabel: todoLabel,
      isModalVisible: true,
    });
  };

  closeModalView = () => {
    this.hideModal();
  };

  setTodoList = (todos, activeTodos, completedTodos) => {
    const { listName } = this.props;

    let validTodoList = [];
    switch (listName) {
      case TODO_LIST_NAMES.ALL:
        validTodoList = todos;
        break;
      case TODO_LIST_NAMES.ACTIVE:
        validTodoList = activeTodos;
        break;
      case TODO_LIST_NAMES.COMPLETED:
        validTodoList = completedTodos;
        break;
      default:
        break;
    }

    return validTodoList;
  };

  render() {
    const { isModalVisible, activeTodoId, activeTodoLabel } = this.state;

    return (
      <TodoAppContext.Consumer>
        {
          ({ removeTodo, updateTodoStatus, updateTodoText, todos, activeTodos, completedTodos }) => {
            const todoList = this.setTodoList(todos, activeTodos, completedTodos);
            return (
              <ScrollView style={styles.container}>
                {
                  todoList.length !== 0
                    ? todoList.map((todo) => (
                      <View key={todo.id} style={styles.todoRow}>
                        <View style={styles.todoItem}>
                          <CheckBox
                            value={todo.isCompleted}
                            onChange={() => updateTodoStatus(todo.id)}
                          />
                          <Text
                            onPress={() => this.openModal(todo.id, todo.label)}
                          >
                            {todo.label}
                          </Text>
                        </View>
                        <Button
                          title="X"
                          color='#ff4c4c'
                          onPress={() => removeTodo(todo.id)}
                        />
                      </View>
                    ))
                    : <EmptyScreen/>
                }
                <ModalWindow
                  inputText={activeTodoLabel}
                  isOpen={isModalVisible}
                  onModalClose={this.closeModalView}
                  editingAction={(newText) => updateTodoText(activeTodoId, newText)}
                />
              </ScrollView>
            )
          }
        }
      </TodoAppContext.Consumer>
    );
  }
}

TodoList.contextType = TodoAppContext;


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  todoItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  todoRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
  },
});
