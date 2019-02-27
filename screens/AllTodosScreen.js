import { Icon } from 'expo';
import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { TodoAppContext } from '../app-context';
import { ModalWindow } from '../components/Modal';
import { TodoList } from '../components/TodoList';
import { TODO_LIST_NAMES } from '../constants/ListNames';

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

  openModal = () => {
    this.setState({
      isModalVisible: true,
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
          ({ addTodo }) => (
            <View style={styles.container}>
              <TodoList
                listName={TODO_LIST_NAMES.ALL}
              />
              <TouchableOpacity
                style={styles.addButton}
                onPress={this.openModal}
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
