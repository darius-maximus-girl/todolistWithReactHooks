import React, { useState, useEffect } from 'react';
import ListItem from './ToDoItem';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const SubmitButton = withStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
      label: {
        textTransform: 'capitalize',
      },
})(Button);

const ToDoList = () => {
    let [counter, setCounter] = useState(0);
    let initialItem = {
        id: counter,
        name: '',
        time: '',
        finished: false,
    }

    const [tasks, setTasks] = useState([]);
    useEffect(() => console.log('THE ARRAY OF TASKS', tasks), [tasks]);

    const [task, setTask] = useState(initialItem);

    const handleSubmit = (e) => {
        e.preventDefault();
        setCounter(counter => counter + 1);
    };

    useEffect(() => {
        if (counter > 0) {
        const newTask = { ...task, id: counter };
        setTasks([...tasks, newTask]);
        setTask(initialItem);
        }
    }, [counter]);

    const deleteItem = (id) => {
        let newTasks = tasks.filter((item, index) => {
            return index !== id
        });
        setTasks(newTasks);
    }

    const handleCheckbox = (val, id) => {
        tasks.map((element) => {
            if (element.id === id) {
                element.finished = val
            }
        })
        console.log('UPDATED TASKS', tasks)
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
                <SubmitButton type="submit">Submit</SubmitButton>
            </form>
            <ListItem tasks={tasks} delete={deleteItem} checked={handleCheckbox} />
        </div>
    )
}

export default ToDoList;