import {
  RECEIVE_STEPS,
  RECEIVE_STEP,
  REMOVE_STEP
} from "../actions/step_actions";
import { merge } from "lodash";

const initialState = {
    1: { 
        id: 1,
        title: 'pour some hot water in a bucket',
        done: false,
        todo_id: 1
    },
    2: {
        id: 2,
        title: 'create a git repo first',
        done: false,
        todo_id: 2
    }
};

const stepsReducer = (state = initialState, action) => {
    Object.freeze(state);
    let newState = {};
    switch (action.type) {
        case RECEIVE_STEPS:
            action.steps.forEach(step => {
                newState[step.id] = step;
            });
            return newState;
        case RECEIVE_STEP:
            const newStep = { [action.step.id]: action.step };
            return merge({}, state, newStep);
        case REMOVE_STEP:
            newState = merge({}, state);
            delete newState[action.step.id];
            return newState;
        default:
            return state;
    }
};

export default stepsReducer;