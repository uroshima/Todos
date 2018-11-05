export const allTodos = state => {
    let all = [];
    Object.keys(state.todos).map(key => {
        all.push(state.todos[key]);
    })
    return all
}