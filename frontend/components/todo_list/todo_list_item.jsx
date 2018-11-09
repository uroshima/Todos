import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: this.props.todo.done,
            output: "Done",
            detail: false 
        }
    }

    updateTodo() {
        let newDone = !this.state.done;
        let newOutput = this.state.output;
        newOutput === "Done" ? newOutput = "Undo" : newOutput = "Done";
        this.setState({done: newDone, output: newOutput});
    }

    showDetail() {
        let newDetail = !this.state.detail;
        this.setState({detail: newDetail});
    }

    render() {
        let details;
        if (this.state.detail) {
            details = <TodoDetailViewContainer todo={this.props.todo} />;
        } 
       
        return <div>
            <li>
              {details}
                <button onClick={() => this.showDetail()}>{this.props.title}</button>
              <button onClick={() => this.updateTodo()}>
                {this.state.output}
              </button>
            </li>
          </div>;
    }
}

export default TodoListItem;