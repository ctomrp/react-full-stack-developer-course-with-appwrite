import { createContext, useContext } from 'react'

export const ToDoContext = createContext({
    todos: [
        {
            id: null,
            todo: '',
            completed: false
        }
    ],
    addToDo: (todo)=>{},
    updateToDo: (id, todo)=>{},
    deleteToDo: (id)=>{},
    toggleComplete: (id) => {}
})

export const useToDO = () => {
    return useContext(ToDoContext)
}

export const ToDoProvider = ToDoContext.Provider