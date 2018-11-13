import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';
import { merge } from "lodash";

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { detail: false };
        this.toggleDetail = this.toggleDetail.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);
    }

    toggleDetail(e) {
        e.preventDefault();
        this.setState({ detail: !this.state.detail });
    }

    toggleTodo(e) {
        e.preventDefault();
        const toggledTodo = merge(
            {},
            this.props.todo,
            { done: !this.props.todo.done }
        );

        this.props.receiveTodo(toggledTodo);
    }

    render() {
        const { todo, updateTodo } = this.props;
        const { title, done } = todo;
        let detail;
        if (this.state.detail) {
            detail = <TodoDetailViewContainer todo={todo} />;
        }

        return (
            <li>
                <div>
                    <h3><a onClick={this.toggleDetail}>{title}</a></h3>
                    <button
                        onClick={this.toggleTodo}>
                        {done ? "Undo" : "Done"}
                    </button>
                </div>
                {detail}
            </li>
        );
    }
}

export default TodoListItem;