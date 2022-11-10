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

type TaskType = {
    title: string
    description: string
    completed: boolean
    status: string
    priority: string
    startDate: string
    deadline: string
}

export type ResponseType<T = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: T
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
        return instance.post<ResponseType<{item: TodolistType}>>('todo-lists', {title})
    },
    deleteToDoList(todoID: string) {
        return instance.delete<ResponseType>(`todo-lists/${todoID}`)
    },
    updateToDoListTitle(todoID: string, data: { title: string }) {
        return instance.put<ResponseType>(`todo-lists/${todoID}`, data)
    }

}

export const taskAPI = {
    getTasks(todoID: string) {
        return instance.get(`todo-lists/${todoID}/tasks`)
    },
    postTask(todoID: string, title: string) {
        return instance.post(`todo-lists/${todoID}/tasks`, {title})
    },
    updateTaskTitle(todoID: string, taskID: string, data: any) {
        return instance.put(`todo-lists/${todoID}/tasks/${taskID}`, data)
    },
    deleteTaskTitle(todoID: string, taskID: string) {
        return instance.delete(`todo-lists/${todoID}/tasks/${taskID}`)
    }
}