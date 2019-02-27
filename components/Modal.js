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

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.inputText !== prevProps.inputText) {
      this.setState({
        inputText: this.props.inputText,
      });
    }
  }

  render () {
    const { isOpen } = this.props;

    const { inputText } = this.state;

    return (
      <View>
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
            >Update your item</Text>
            <TextInput
              autoFocus
              style={styles.input}
              value={inputText}
              onChangeText={this.updateInputText}
              onEndEditing={this.finishInputEditing}
            />
          </View>
        </Modal>
      </View>
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
