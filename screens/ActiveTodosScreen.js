import React from 'react';
import { TodoAppContext } from '../app-context';
import { TodoList } from '../components/TodoList';

export default class ActiveTodosScreen extends React.Component {
  static navigationOptions = {
    title: 'Active todos',
  };

  render() {
    return (
      <TodoAppContext.Consumer>
        {
          ({ activeTodos, removeTodo, updateTodoStatus, updateTodoText }) => (
            <TodoList
              todoList={activeTodos}
              removeTodo={removeTodo}
              updateTodoStatus={updateTodoStatus}
              updateTodoText={updateTodoText}
            />
          )
        }
      </TodoAppContext.Consumer>
    );
  }
}
