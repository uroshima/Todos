import React from 'react';
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form';

class TodoList extends React.Component {
    render() {
        const todoItems = this.props.todos.map(todo => (
            <TodoListItem
                key={`todo-list-item${todo.id}`}
                todo={todo}
                receiveTodo={this.props.receiveTodo} />
        )
        );
        return (
            <div>
                <TodoForm receiveTodo={this.props.receiveTodo} />
                <ul>{todoItems}</ul>
            </div>
        )
    }
}

export default TodoList;