import React, { Component } from 'react'
import { CheckBox, ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import { EmptyScreen } from './EmptyScreen';

export class TodoList extends Component {
    render () {
        const { todoList, removeTodo, updateTodo } = this.props;

        return (
            <ScrollView style={styles.container}>
                {
                    todoList.length !== 0
                    ? todoList.map((todo) => (
                        <View key={todo.id} style={styles.todoRow}>
                            <View style={styles.todoItem}>
                                <CheckBox
                                    value={todo.isCompleted}
                                    onChange={() => updateTodo(todo.id)}
                                />
                                <Text>{todo.label}</Text>
                            </View>
                            <Button
                                title="X"
                                color='#ff4c4c'
                                onPress={() => removeTodo(todo.id)}
                            />
                        </View>
                    ))
                    : <EmptyScreen />
                }
            </ScrollView>
        )
    }
}

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
