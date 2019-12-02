import React, { useState, useEffect } from 'react';
import ListItem from './ToDoItem';

let initialList = {
    name: '',
    time: '',
    finished: false
}

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState(initialList);
    useEffect(() => console.log('THE ARRAY OF TASKS', tasks), [tasks]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks([...tasks, task]);
        setTask(initialList);
    }

    const deleteItem = (id) => {
        let newTasks = tasks.filter((item, index) => {
            return index !== id
        });
        setTasks(newTasks);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="Add a task" onChange={(e) => {
                    let value = e.target.value;
                    setTask(prevState => {
                        return {...prevState, name: value}
                    })
                }} 
                value={task.name}></input>

                <input placeholder="Add time" onChange={(e) => {
                    let value = e.target.value;
                    setTask(prevState => {
                        return {...prevState, time: value}
                    })
                }} value={task.time}></input>
                <button>Submit</button>
            </form>
            <ListItem tasks={tasks} delete={deleteItem}/>
        </div>
    )
}

export default ToDoList;