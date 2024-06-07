import { createContext, useEffect, useState } from 'react'
import tasksData from '../tasks'

export const TaskContext = createContext()


export const TaskContextProvider = (props) => {

    const [ tasks, setTasks ] = useState([])

    console.log(tasksData)


    const createTask = (task) => {
        setTasks([...tasks, task])
    }

    const deleteTask = (idTask) => {

        setTasks( tasks.filter( task => task.id !== idTask ) )

    }

    useEffect(() => {
        setTasks(tasksData)
    },[])

    return (
        <TaskContext.Provider value = {{
            tasks, setTasks,
            createTask,
            deleteTask
        }} >
        {props.children}
        </TaskContext.Provider>
    )
}