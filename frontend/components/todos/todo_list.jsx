import React from 'react';
import TodoListItem from '../todo_list/todo_list_item';

const TodoList = ({ todos }) => {
    return (
        todos.map((todo, idx) => (
            <TodoListItem key={idx} title={todo.title}/>
        ))
    )
}

export default TodoList;