import React from 'react';
import { uniqueId } from "../../util/util";


class StepForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            done: false,
            todo_id: this.props.todo_id
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => (
            this.setState({[field]: e.target.value })
        )
    };

    handleSubmit(e) {
        e.preventDefault();
        const step = Object.assign({}, this.state, { id: uniqueId() })
        this.props.receiveStep(step);
        this.setState({
            title: '',
            body: ''
        })
    }

    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>Title:
                    <input ref="title" onChange={this.update("title")} value={this.state.title} placeholder="title" />
                </label>
                <label>Description:
                    <input ref="body" onChange={this.update("body")} value={this.state.body} placeholder="body" />
                </label>
                <button>Create Step</button>
            </form>
        </div>
        )
    }
}

export default StepForm;

