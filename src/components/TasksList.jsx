import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"
import { TaskCard } from "./TaskCard"

export const TasksList = () => {

    const { tasks } = useContext(TaskContext)

    return (
        <div className="tasks">
            <h2 className="">Tareas</h2>

            <div className="div_tasks">
                {
                    tasks.map(task => {
                        return <TaskCard key={task.id} task={task}/>
                    })
                }
            </div>

        </div>
    )
}