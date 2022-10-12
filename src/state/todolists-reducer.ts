import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";

export const todolistsReducer = (state: Array<TodolistType>, action: tlActionType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(f => f.id !== action.payload.id)
        }
        case "ADD-TODOLIST": {
            let newTodolist: TodolistType = {id: v1(), title: action.payload.title, filter: 'all'}
            return [...state, newTodolist]
        }
        case 'CHANGE-TODOLIST-TITLE': {
            return state.map(t => t.id === action.payload.id ? {...t, title: action.payload.title} : t);
        }
        case 'CHANGE-TODOLIST-FILTER': {
            return state.map(t => t.id === action.payload.id ? {...t, filter: action.payload.newFilter} : t);
        }
        default:
            return state;
    }

}

export type tlActionType = removeTodolistACType | addTodolistACType | changeTodolistTitleACType | changeTodolistFilterACType

type removeTodolistACType = ReturnType<typeof removeTodolistAC>
type addTodolistACType = ReturnType<typeof addTodolistAC>
type changeTodolistTitleACType = ReturnType<typeof changeTodolistTitleAC>
type changeTodolistFilterACType = ReturnType<typeof changeTodolistFilterAC>
export const removeTodolistAC = (todolistId1: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {id: todolistId1}
    } as const
}

export const addTodolistAC = (title: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {title: title}
    } as const
}

export const changeTodolistTitleAC = (todolistId: string, newTodolistTitle: string) => {
   return {
       type: 'CHANGE-TODOLIST-TITLE',
       payload: {
           id: todolistId,
           title: newTodolistTitle
       }
   } as const
}

export const changeTodolistFilterAC = (todolistId: string, newFilter: FilterValuesType) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        payload: {
            id: todolistId,
            newFilter: newFilter
        }
    } as const
}