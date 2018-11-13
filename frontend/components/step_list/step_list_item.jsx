import React from 'react';
import { merge } from 'lodash';

class StepListItem extends React.Component {
    constructor(props) {
        super(props);
        this.toggleStep = this.toggleStep.bind(this);
    }

    toggleStep(e) {
        const toggledStep = merge(
            {},
            this.props.step,
            { done: !this.props.step.done }
        );
        this.props.receiveStep(toggledStep);
    }

    render() {
        return (
            <div>
                <li>
                <div>
                    <h3>{this.props.step.title}</h3>
                    <p>{this.props.step.body}</p>
                </div>
                <div>
                    <button onClick={this.toggleStep}>
                    {this.props.step.done ? "Undo" : "Done"}
                    </button>
                    <button onClick={this.props.removeStep}>Delete</button>
                </div>
                </li>
            </div>
        )
    }
}

export default StepListItem;