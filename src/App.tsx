import React, {useCallback, useEffect} from 'react'
import './App.css';
import {Todolist} from './Todolist';
import {AddItemForm} from './AddItemForm';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {Menu} from '@mui/icons-material';
import {
    changeTodolistFilterAC,
    createTodolistTC,
    deleteTodoListTC,
    FilterValuesType,
    getTodoListsTC,
    TodolistDomainType,
    updateTodolistTC
} from './state/todolists-reducer'
import {addTaskTC, removeTaskTC, updateTaskStatusTC, updateTaskTitleTC} from './state/tasks-reducer';
import {useAppDispatch, useAppSelector} from './state/store';
import {TaskStatuses, TaskType} from './api/todolists-api'

export type TasksStateType = {
    [key: string]: Array<TaskType>
}


function App() {

    const todolists = useAppSelector<Array<TodolistDomainType>>(state => state.todolists)
    const tasks = useAppSelector<TasksStateType>(state => state.tasks)
    const dispatch = useAppDispatch();

    const removeTask = useCallback(function (id: string, todolistId: string) {
        const thunk = removeTaskTC(todolistId, id);
        dispatch(thunk);
    }, []);

    const addTask = useCallback(function (title: string, todolistId: string) {
        // const action = addTaskAC(title, todolistId);
        // dispatch(action);
        dispatch(addTaskTC(todolistId, title))
    }, []);

    const changeStatus = useCallback(function (id: string, status: TaskStatuses, todolistId: string) {
        dispatch(updateTaskStatusTC(id, todolistId, status));
    }, []);

    const changeTaskTitle = useCallback(function (id: string, newTitle: string, todolistId: string) {
        const thunk = updateTaskTitleTC(id, newTitle, todolistId);
        dispatch(thunk);
    }, []);

    const changeFilter = useCallback(function (value: FilterValuesType, todolistId: string) {
        const action = changeTodolistFilterAC(todolistId, value);
        dispatch(action);
    }, []);

    const removeTodolist = useCallback(function (id: string) {
        const thunk = deleteTodoListTC(id);
        dispatch(thunk);
    }, []);

    const changeTodolistTitle = useCallback(function (id: string, title: string) {
        const thunk = updateTodolistTC(id, title);
        dispatch(thunk);
    }, []);

    const addTodolist = useCallback((title: string) => {
        const thunk = createTodolistTC(title);
        dispatch(thunk);
    }, [dispatch]);

    useEffect(() => {
        // todolistsAPI.getTodolists()
        //     .then(res => dispatch(setTodolistsAC(res.data)))
        dispatch(getTodoListsTC())
    }, [])

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container style={{padding: '20px'}}>
                    <AddItemForm addItem={addTodolist}/>
                </Grid>
                <Grid container spacing={3}>
                    {
                        todolists.map(tl => {
                            let allTodolistTasks = tasks[tl.id];

                            return <Grid item key={tl.id}>
                                <Paper style={{padding: '10px'}}>
                                    <Todolist
                                        id={tl.id}
                                        title={tl.title}
                                        tasks={allTodolistTasks}
                                        removeTask={removeTask}
                                        changeFilter={changeFilter}
                                        addTask={addTask}
                                        changeTaskStatus={changeStatus}
                                        filter={tl.filter}
                                        removeTodolist={removeTodolist}
                                        changeTaskTitle={changeTaskTitle}
                                        changeTodolistTitle={changeTodolistTitle}
                                    />
                                </Paper>
                            </Grid>
                        })
                    }
                </Grid>
            </Container>
        </div>
    );
}

export default App;
