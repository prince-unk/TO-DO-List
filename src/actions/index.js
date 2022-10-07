export const addTodo = () => {
    return {
        type: 'ADD_TO_DO',
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const removeTodo = () => {
    return {
        type: 'REMOVE_TO_DO',
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}