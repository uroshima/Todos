import React from 'react';

class StepListItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props);
        return (
            <div>
                {this.props.title}
                {this.props.body}
                <button onClick={this.props.removeStep}>Delete Step</button>
            </div>
        )
    }
}

export default StepListItem;