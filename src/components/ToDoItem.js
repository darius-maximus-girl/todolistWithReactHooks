import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const StyledButton = withStyles({
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

function ListItem(props) {
    const tasks = props.tasks;
    const [isChecked, setIsChecked] = useState(false);

    return tasks.map((element, index) => {
        console.log(element.finished)
        return <li className={element.finished ? 'listitem greyscale' : 'lititem'} key={index}><span>{element.name}: {element.time}</span>
            <StyledButton onClick={() => props.delete(index)}>delete</StyledButton>
            <label className="container">
                <input type="checkbox" checked={element.finished}
                    onChange={() => {
                        setIsChecked(!isChecked);
                        props.checked(!element.finished, element.id)
                        }}></input>
                <span className="checkmark">{isChecked}</span>
            </label>
        </li>
    })
}


export default ListItem;