import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

export const TaskCard = ({task}) => {

    const { deleteTask } = useContext(TaskContext)    

    return (
        <div className="task">
                <p className="task_title">{task.title}</p>
                <p className="task_description">{task.descripcion}</p>
                <div className="div_delete">
                    <button className="button_delete" onClick={evt => deleteTask(task.id)}>Eliminar</button>
                </div>
        </div>
    )   
}