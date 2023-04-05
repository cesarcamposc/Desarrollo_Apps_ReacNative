import React, { useEffect, useState } from 'react'
import './Todo.css';

function Tarea({task,index,completedTask,removeTask}) {
    return(
        <div className='task'>
            {task.title}
            <button style = {{background: "red"}} onClick={()=> removeTask(index)}>X</button>
            <button onClick={()=> completedTask(index) }>Complete</button>
        </div>
    );
    
}

function CrearTarea({agregarTarea}) {
    const [value, setValue] = useState("");

    const handleSubmit = () =>{
        if (!value) return;
        addTask(value);
        setValue("");
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" className='input' value={value} placeholder='Agregar una nueva tarea' onChange={()=> setValue(value)}
             />
        </form>

    );
}

function Todo() {

    const [tasksRestantes, setTareasRestantes] = useState(0);
    const [tasks,setTasks] = useState(
        [
            {
                title : "comer Frutas",
                completado : true
            },

            {
                title : "entrenar",
                completado : true
            },

            {
                title : "Arreglar mi habitación",
                completado : false
            },
        
        ]);

        useEffect(()=> {setTareasRestantes(tasks.filter(()=> Tarea.completado))});

        const addTask = (title) =>{
            const nuevaTarea = [...tasks, {title, completado: false}];
            setTasks(nuevaTarea);
        };

        const completedTask = (index) =>{
            const newTasks = [...tasks];
            nuevaTarea[index].completado = true;
            setTasks(nuevaTarea);
        };

        const removeTask = (index) =>{
            const newTasks = [...tasks];
            nuevaTarea.splice(index,1);
            setTareasRestantes(nuevaTarea);
        };

  return (
    <div className='todo-container'>
        <div className='header'>Tareas Pendientes ({tasksRestantes})</div>
        <div className='tasks'>
            {
                tasks.map((task,index)  => (
                    <Tarea
                    task = {task}
                    index = {index}
                    completedTask = {completedTask}
                    removeTask = {removeTask}
                    key = {index} 
                    />
                ))
            }

        </div>
        <div className='create-task'>
            <CrearTarea addTask={addTask}/>
        </div>
        
    </div>
  )
}

export default Todo