import React from 'react';
// import { removeTodo } from '../../actions/todo_actions';

class TodoListItem extends React.Component {

    render() {
        console.log("inside TodoListItem", this.props);
        return (
            <div>
                <li>
                    {this.props.title}
                    <button onClick={this.props.removeTodo}>Delete Todo</button>
                </li>
            </div>
        )
    }
}

export default TodoListItem;