import React from 'react';
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form';

const TodoList = (props) => {
    return (
        <div>
            <TodoForm receiveTodo={props.receiveTodo} />
            {props.todos.map((todo, idx) => (
            <TodoListItem
                key={idx}
                title={todo.title}
                todo={todo}
                removeTodo={props.removeTodo}
                receiveTodo={props.receiveTodo}
            />
            ))}
        </div>
    )
}

export default TodoList;