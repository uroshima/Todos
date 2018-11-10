import React from 'react';
import { connect } from 'react-redux';
import { removeStep, receiveStep } from '../../reducers/steps_reducer';
import StepListItem from './step_list_item';

const mapDispatchToProps = (dispatch, {step}) => ({
    removeStep: () => dispatch(removeStep(step)),
    receiveStep: () => dispatch(receiveStep())
});

export default connect(
    null,
    mapDispatchToProps 
)(StepListItem);