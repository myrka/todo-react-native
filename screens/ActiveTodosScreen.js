import React from 'react';
import { TodoList } from '../components/TodoList';
import { TODO_LIST_NAMES } from '../constants/ListNames';

export default class ActiveTodosScreen extends React.Component {
  static navigationOptions = {
    title: 'Active todos',
  };

  render() {
    return (
      <TodoList
        listName={TODO_LIST_NAMES.ACTIVE}
      />
    );
  }
}
