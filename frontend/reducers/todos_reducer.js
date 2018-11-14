import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions';
import { merge } from 'lodash';

const initialState = {
    1: {
        id: 1,
        title: 'wash bike',
        body: 'by yourself, with towel only',
        done: false
    },
    2: {
        id: 2,
        title: 'keep coding',
        body: 'at least 4 hours',
        done: true
    },
    3: {
        id: 3,
        title: 'workout',
        body: 'outdoor workout + running',
        done: true
    },
};

const todosReducer = (state = initialState, action) => {
    Object.freeze(state);
    let newState = {};
    switch(action.type) {
        case RECEIVE_TODOS:
            action.todos.forEach(todo => {
                newState[todo.id] = todo;
            });
            return newState;
        case RECEIVE_TODO: 
            const newTodo = {[action.todo.id]: action.todo};
            return merge({}, state, newTodo);
        case REMOVE_TODO:
            newState = merge({}, state);
            delete newState[action.todo.id];
            return newState;
        default:
            return state;
    }
};

export default todosReducer;