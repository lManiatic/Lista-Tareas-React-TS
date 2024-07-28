import { useState } from "react"
import { ListaTareas } from "./ListaTareas"

export const TodoApp = () => {

    const  [tareas, setTareas] = useState<string>('')
    const [listaTareas, setListaTareas] = useState<string[]>([])

    const handleAddTasks = () => {
        if(tareas.trim() === '') return
        setListaTareas(tareaAnteriores => [...tareaAnteriores, tareas])
        setTareas('')
    }

    const handleBorrarTarea = (index: number) => {
      setListaTareas(tareasActuales => tareasActuales.filter((_, i) => i !== index))
    }
  return (
    <div>
        <h1>Lista de Tareas</h1>
        <div>
            <input
            type="text"
            value={tareas}
            onChange={(e) => setTareas(e.target.value)}
            placeholder="Ingrese una tarea"
            />
            <button onClick={handleAddTasks}>Agregar tarea</button>
        </div>
        <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea}></ListaTareas>
    </div>
  )
}