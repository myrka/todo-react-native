import React from 'react';
import { TodoList } from '../components/TodoList';
import { TODO_LIST_NAMES } from '../constants/ListNames';

export default class CompletedTodosScreen extends React.Component {
  static navigationOptions = {
    title: 'Completed Todos',
  };

  render() {
    return (
      <TodoList
        listName={TODO_LIST_NAMES.COMPLETED}
      />
    );
  }
}
