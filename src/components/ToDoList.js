import React, { useState, useEffect } from 'react';
import ListItem from './ToDoItem';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Popup from './Popup';

const SubmitButton = withStyles({
    root: {
        background: '#00adb5',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(34, 40, 49, .5)',
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
        time: '00:00',
        pmAm: 'a.m.',
        finished: false,
    }

    const [tasks, setTasks] = useState([]);
    useEffect(() => console.log('THE ARRAY OF TASKS', tasks), [tasks]);

    const [task, setTask] = useState(initialItem);

    const [popup, setPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.name === '') {
            console.log('popup');
            setPopup(true);
        } else {
            setCounter(counter => counter + 1);
        }
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

    const handlePopup = (val) => {
        setPopup(val);
    }

    return (
        <div>
            <div className="form-container">
                {popup && <Popup isActive={handlePopup}></Popup>}
                <form onSubmit={handleSubmit}>
                    <input className="task-input" placeholder="Add a task" onChange={(e) => {
                        let value = e.target.value;
                        setTask(prevState => {
                            return { ...prevState, name: value }
                        })
                    }}
                        value={task.name}></input>

                    <div>
                        <input placeholder="Add time" id="time" type="time" min="00:00" max="12:59" onChange={(e) => {
                            let value = e.target.value;
                            setTask(prevState => {
                                return { ...prevState, time: value }
                            })
                        }} value={task.time}></input>

                        <select value={task.pmAm} onChange={(e) => {
                            let value = e.target.value;
                            setTask(prevState => {
                                return { ...prevState, pmAm: value }
                                
                            })
                        }}>
                            <option value="a.m.">a.m.</option>
                            <option value="p.m.">p.m.</option>
                        </select>
                    </div>
                    <SubmitButton type="submit">Submit</SubmitButton>
                </form>
            </div>
            <ul className="todolist-container">
                <ListItem tasks={tasks} delete={deleteItem} checked={handleCheckbox} />
            </ul>
        </div>
    )
}

export default ToDoList;