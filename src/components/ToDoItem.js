import React from 'react';

function ListItem(props) {
    const tasks = props.tasks;
    return tasks.map((element, index) => {
    console.log(element, index);
    return <li key={index}>{element.name}: {element.time}<button onClick={() => props.delete(index)}>delete</button></li>
    }
    )
}

export default ListItem;