import React, { useState } from 'react';


function ListItem(props) {
    const tasks = props.tasks;
    const [isChecked, setIsChecked] = useState(false);

    return tasks.map((element, index) => {

        return <li className="greyscale" key={index}>{element.name}: {element.time}<button onClick={() => props.delete(index)}>delete</button>
            <label className="container">
                <input type="checkbox" checked={element.finished} onClick={(e) => {
                    setIsChecked(!isChecked);
                    props.checked(isChecked, element.id);
                }}></input>
                <span className="checkmark"></span>
            </label>
        </li>
    })
}

export default ListItem;