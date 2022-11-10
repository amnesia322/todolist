import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {taskAPI, todolistAPI} from "../api/todolist-api";

export default {
    title: 'API'
}

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": 'f8c9c547-0d03-4fe5-8a49-d0564fd78b8a'
    }
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
        // axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
        todolistAPI.getToDoLists().then((res) => {
            setState(res.data)
        })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = 'TodoTitle'
        // axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: 'New ToDo'} , settings)
        todolistAPI.createToDoList(title).then((res) => {
            setState(res.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoID = '92f611b8-1da9-40ed-95ed-0dc3aec61842'
        // axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoID}` , settings)
        todolistAPI.deleteToDoList(todoID).then((res) => {
            setState(res.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoID = 'cd05e092-9149-49e1-bf39-8aa72a864b0f'
        const data = {title: 'blablaaaaaaaablaaaaaaaaaaa'}
        // axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoID}`, data, settings)
        todolistAPI.updateToDoListTitle(todoID, data).then((res) => {
            setState(res.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoID = 'cd05e092-9149-49e1-bf39-8aa72a864b0f'
        taskAPI.getTasks(todoID).then((res) => {
            setState(res.data)
        })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const PostTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = 'NewTask'
        const todoID = 'cd05e092-9149-49e1-bf39-8aa72a864b0f'
        taskAPI.postTask(todoID, title).then((res) => {
            setState(res.data)
        })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const data = {
            addedDate: "2022-11-10T19:25:36.3297448Z",
            deadline: null,
            description: null,
            id: "2b40a403-366c-4b24-a037-15798ed989ea",
            order: 0,
            priority: 1,
            startDate: null,
            status: 0,
            title: "NEEEEEEEEEEEEEEEEEEEEEEEWWW",
            todoListId: "cd05e092-9149-49e1-bf39-8aa72a864b0f",
        }

        taskAPI.updateTaskTitle(data.todoListId, data.id, data).then((res) => {
            setState(res.data)
        })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoID = 'cd05e092-9149-49e1-bf39-8aa72a864b0f'
        const taskID = 'bd4af602-3d9d-4b13-b1cc-8c9d6bb25475'
        taskAPI.deleteTaskTitle(todoID, taskID).then((res) => {
            setState(res.data)
        })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}