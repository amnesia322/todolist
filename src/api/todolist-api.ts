import axios from 'axios'


const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": 'f8c9c547-0d03-4fe5-8a49-d0564fd78b8a'
    }
}

export const todolistAPI = {
    getToDoLists() {
        return axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
    },
    createToDoList(title: string) {
        return axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title}, settings)
    },
    deleteToDoList(todoID: string) {
        return axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoID}`, settings)
    },
    updateToDoListTitle(todoID: string, data: { title: string }) {
        return axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoID}`, data, settings)
    }

}