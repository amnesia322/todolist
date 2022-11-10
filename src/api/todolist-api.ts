import axios from 'axios'


/*const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": 'f8c9c547-0d03-4fe5-8a49-d0564fd78b8a'
    }
}*/

type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}

type CreateTodolistResponseType = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: {
        item: TodolistType
    }
}

type UpdateTodolistResponseType = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: {}
}

type DeleteTodolistResponseType = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: {}
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': 'f8c9c547-0d03-4fe5-8a49-d0564fd78b8a',
    },
})

export const todolistAPI = {
    getToDoLists() {
        return instance.get<TodolistType[]>('todo-lists')
    },
    createToDoList(title: string) {
        return instance.post<CreateTodolistResponseType>('todo-lists', {title})
    },
    deleteToDoList(todoID: string) {
        return instance.delete<DeleteTodolistResponseType>(`todo-lists/${todoID}`)
    },
    updateToDoListTitle(todoID: string, data: { title: string }) {
        return instance.put<UpdateTodolistResponseType>(`todo-lists/${todoID}`, data)
    }

}