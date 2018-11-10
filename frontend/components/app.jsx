import React from 'react';
import TodoListContainer from './todos/todo_list_container';
import StepListContainer from './step_list/step_list_container';

const App = () => (
    <div className="app">
        <TodoListContainer />
        <StepListContainer />
    </div>
);

export default App;