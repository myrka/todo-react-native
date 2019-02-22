import React from 'react'

export const initialTodos = [
    {
        id: 1,
        label: 'Todo 1',
        isCompleted: false,
    },{
        id: 2,
        label: 'Todo 2',
        isCompleted: true,
    },{
        id: 3,
        label: 'Todo 3',
        isCompleted: true,
    },{
        id: 4,
        label: 'Todo 4',
        isCompleted: false,
    },{
        id: 5,
        label: 'Todo 5',
        isCompleted: true,
    },{
        id: 6,
        label: 'Todo 6',
        isCompleted: false,
    },
];

export const TodoAppContext = React.createContext({
    todos: [],
    activeTodos: [],
    completedTodos: [],
    updateTodo: () => {},
    addTodo: () => {},
    removeTodo: () => {},
});

export const filterTodos = (todos) => {
    const activeTodos = todos.filter((todo) => !todo.isCompleted);
    const completedTodos = todos.filter((todo) => todo.isCompleted);

    return {
        todos,
        activeTodos,
        completedTodos,
    }
};
