export const todoIndexFinder = (TODOS: {id: string}[], todoId: string) => {
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);

    if (todoIndex < 0) {
        throw new Error('Could not find todo!')
    }

    return todoIndex
}