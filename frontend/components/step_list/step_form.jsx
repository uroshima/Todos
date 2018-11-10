import React from 'react';

class StepForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
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
        const step = Object.assign({}, this.state)
        this.props.receiveStep(step);
        this.state = {
            title: '',
            body: ''
        }
    }

    render() {
        return <div>
            <form onSubmit={this.handleSubmit}>
              <input onChange={this.update("title")} value={this.state.title} placeholder="title" />
              <input onChange={this.update("body")} value={this.state.body} placeholder="body" />
              <button>Create Step</button>
            </form>
          </div>;
    }
}

export default StepForm;