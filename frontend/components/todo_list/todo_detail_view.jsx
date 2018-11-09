import React from 'react';

class TodoDetailView extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.props.removeTodo}>
                    Delete Todo
                </button>
            </div>
        )
    }
}

export default TodoDetailView;