import React from 'react';
import StepListItem from './step_list_item';
import StepForm from './step_form';

const StepList = props => {
    return (
        <div>
            <StepForm receiveStep={props.receiveStep} />
            {props.steps.map((step, id) => (
                <StepListItem 
                key={id}
                title={step.title}
                step={step}
                removeStep={props.removeStep}
                receiveStep={props.receiveStep}
                />
                ))}
        </div>
    )
}

export default StepList;