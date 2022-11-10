import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {todolistAPI} from "../api/todolist-api";

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
        todolistAPI.getToDoLists().then((res)=> {
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
        todolistAPI.createToDoList(title).then((res)=> {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoID = '02fdfd5f-6725-4903-9dc1-d6ec0e96a336'
        // axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoID}` , settings)
        todolistAPI.deleteToDoList(todoID).then((res)=> {
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
        todolistAPI.updateToDoListTitle(todoID, data).then((res)=> {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}