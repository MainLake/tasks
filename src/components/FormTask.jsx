import { useState, useContext } from "react"
import { TaskContext } from "../context/TaskContext"

export const FormTask = () => {

    const { createTask, tasks } = useContext(TaskContext)

    const [title, setTitle] = useState("")
    const [descripcion, setDescripcion] = useState("")

    const [message, setMessage] = useState("")
    const [error, setError] = useState("")

    const taskSubmit = (evt) => {
        evt.preventDefault()
        if (title.trim() == "") {
            setError("⚠️ Titulo requerido")
            setTimeout(() => {
                setError("")
            }, 2000)
            return
        }

        setMessage("📖 Tarea creada")

        setTitle("")
        setDescripcion("")

        const idNewTarea = tasks.length + 1

        const newTask = {
            id: idNewTarea,
            title: title,
            descripcion: descripcion
        }

        createTask(newTask)

        setTimeout(() => {
            setMessage("")
        }, 2000)
    }

    return (
        <div className="div_form">

            <h2>Crear tarea</h2>
            {
                message !== "" && (
                    <div className="message">
                        {message}
                    </div>
                )
            }
            {
                error !== "" && (
                    <div className="error">
                        {error}
                    </div>
                )
            }
            <form className="form" onSubmit={taskSubmit}>

                <div className="div_input">
                    <label>Titulo</label>
                    <input value={title} type="text" onChange={evt => setTitle(evt.target.value)} />
                </div>
                <div className="div_input">
                    <label>Descripcion</label>
                    <textarea value={descripcion} type="text" onChange={evt => setDescripcion(evt.target.value)} />
                </div>
                <div>
                    <button type="submit">
                        Crear
                    </button>
                </div>

            </form>

        </div>
    )

}
