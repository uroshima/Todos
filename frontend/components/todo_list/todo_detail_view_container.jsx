import TodoDetailView from './todo_detail_view';
import { removeTodo } from '../../actions/todo_actions';
import { receiveSteps } from '../../actions/step_actions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch, {todo}) => ({
    removeTodo: () => dispatch(removeTodo(todo)),
    receiveSteps: () => dispatch(receiveSteps())
});

export default connect(
  null,
  mapDispatchToProps
)(TodoDetailView);