import React from 'react';
import { uniqueId } from "../../util/util";


class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            done: false
        };
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    update(field) {
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const todo = Object.assign({}, this.state, { id: uniqueId() });
        this.props.receiveTodo(todo);
        this.setState({
            title: '',
            body: ''
        })
    }

    render() {
        return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.update('title')} value={this.state.title} placeholder="title" />
                        <input onChange={this.update('body')} value={this.state.body} placeholder="body" />
                        <button>Create Todo</button>
                    </form>
                </div>
        )
    }
}


export default TodoForm;