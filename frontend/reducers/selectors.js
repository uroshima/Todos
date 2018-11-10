export const allTodos = state => {
    let allTodos = [];
    Object.keys(state.todos).map(key => {
        allTodos.push(state.todos[key]);
    })
    return allTodos;
}
// Another way to do it
// export const allTodos = ({ todos }) => Object.keys(todos).map(id => todos[id]);


export const stepsByTodoId = (state, todo_id) => {
    let allSteps = [];
    Object.keys(state.steps).map(key => {
    if (state.steps.todo_id === todo_id) {
        allSteps.push(state.steps[key]);
    }
    });
    return allSteps;
};