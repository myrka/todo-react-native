import React, { Component } from 'react'
import { Modal, StyleSheet, Text, TextInput, View } from 'react-native';

export class ModalWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: props.inputText || ''
    }
  }

  updateInputText = (text) => {
    this.setState({
      inputText: text,
    })
  };

  clearText = () => {
    this.setState({
      inputText: '',
    });
  };

  closeModal = () => {
    const { onModalClose } = this.props;

    this.clearText();
    onModalClose();
  };

  finishInputEditing = () => {
    const {
      editingAction,
    } = this.props;

    const { inputText } = this.state;

    editingAction(inputText);
    this.closeModal();
  };

  render () {
    const { isOpen } = this.props;

    const { inputText } = this.state;

    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={isOpen}
        onRequestClose={this.closeModal}
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
            value={inputText}
            onChangeText={this.updateInputText}
            onEndEditing={this.finishInputEditing}
          />
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    margin: 25,
  },
  label: {
    fontSize: 16,
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
  },
});
