import React from 'react';

function ListItem(props) {
    const tasks = props.tasks;

    return tasks.map((element, index) => {
        return <li className="greyscale" key={index}>{element.name}: {element.time}<button onClick={() => props.delete(index)}>delete</button>
            <label className="container">
                <input type="checkbox" checked={element.checked} onClick={(e) => {
                    let checked = e.target.checked;
                    props.checked(checked, index);
                    console.log('THIS IS THE INDEX PASSED IN PROPS', index)
                    }}></input>
                <span className="checkmark"></span>
            </label>
        </li>
    })
}

export default ListItem;