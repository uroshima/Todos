import { connect } from 'react-redux';
import StepList from './step_list';
import { receiveStep, removeStep } from '../../actions/step_actions';
import { stepsByTodoId } from '../../reducers/selectors';

const mapStateToProps = (state, { todo_id }) => ({
    steps: stepsByTodoId(state, todo_id),
    todo_id
});

const mapDispatchToProps = dispatch => ({
    receiveStep: step => dispatch(receiveStep(step))
    // removeStep: (step) => dispatch(removeStep(step))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StepList);