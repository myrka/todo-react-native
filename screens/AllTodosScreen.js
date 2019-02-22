import React from 'react';
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
                <TodoList
                    todoList={todos}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />
            )
          }
        </TodoAppContext.Consumer>
    );
  }
}
