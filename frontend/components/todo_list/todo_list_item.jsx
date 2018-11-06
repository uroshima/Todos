import React from 'react';
// import { removeTodo } from '../../actions/todo_actions';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: this.props.todo.done,
            output: "Done" 
        }
    }

    updateTodo() {
        let newDone = !this.state.done;
        let newOutput = this.state.output;
        newOutput === "Done" ? newOutput = "Undo" : newOutput = "Done";
        this.setState({done: newDone, output: newOutput});
    }

    render() {
        return <div>
            <li>
              {this.props.title}
              <button onClick={() => this.props.removeTodo(this.props.todo)}>
                Delete Todo
              </button>
              <button onClick={() => this.updateTodo()}>
                {this.state.output}
              </button>
            </li>
          </div>;
    }
}

export default TodoListItem;