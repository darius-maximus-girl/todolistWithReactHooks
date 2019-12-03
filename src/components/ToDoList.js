import React, { useState, useEffect } from 'react';
import ListItem from './ToDoItem';

const ToDoList = () => {
    let [counter, setCounter] = useState(0);
    console.log('THIS IS MY COUNTER', counter);
    let initialList = {
        id: counter,
        name: '',
        time: '',
        finished: false,
    }

    const [tasks, setTasks] = useState([]);
    useEffect(() => console.log('THE ARRAY OF TASKS', tasks), [tasks]);

    const [task, setTask] = useState(initialList);
    useEffect(() => console.log('THE CURRENT TASK', task), [task]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setCounter(prevState => {return counter + 1});
        setTask(prevState => {
            return { ...prevState, id: counter + 1}
        })
        setTasks([...tasks, task]);
        setTask(initialList);
    }

    const deleteItem = (id) => {
        let newTasks = tasks.filter((item, index) => {
            return index !== id
        });
        setTasks(newTasks);
    }

    const handleCheckbox = (val, id) => {
        tasks.map((element, index) => {
            if (index === id) {
                element.finished = val
            }
        })
        console.log('UPDATED ARR', tasks)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="Add a task" onChange={(e) => {
                    let value = e.target.value;
                    setTask(prevState => {
                        return { ...prevState, name: value }
                    })
                }}
                    value={task.name}></input>

                <input placeholder="Add time" onChange={(e) => {
                    let value = e.target.value;
                    setTask(prevState => {
                        return { ...prevState, time: value }
                    })
                }} value={task.time}></input>
                <button>Submit</button>
            </form>
            <ListItem tasks={tasks} delete={deleteItem} checked={handleCheckbox} />
        </div>
    )
}

export default ToDoList;