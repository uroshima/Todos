import React from 'react';
// import { removeTodo } from '../../actions/todo_actions';

class TodoListItem extends React.Component {

    render() {
        return (
            <div>
                <li>
                {this.props.title}
                    <button onClick={() => this.props.removeTodo(this.props.todo)}>
                    Delete Todo
                </button>
                </li>
            </div>
        )
    }
}

export default TodoListItem;