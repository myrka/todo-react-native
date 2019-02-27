import React from 'react';
import { TodoAppContext } from '../app-context';
import { TodoList } from '../components/TodoList';

export default class CompletedTodosScreen extends React.Component {
  static navigationOptions = {
    title: 'Completed Todos',
  };

  render() {
    return (
      <TodoAppContext.Consumer>
        {
          ({ completedTodos, removeTodo, updateTodoStatus, updateTodoText }) => (
            <TodoList
              todoList={completedTodos}
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
