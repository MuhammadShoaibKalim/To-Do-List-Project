import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';

const TodoList = (props) => {
  const [line, setLine] = useState(false);

  const cutIt = () => {
    setLine(true);
  }

  return (
    <div className="todo_style">
      <span onClick={cutIt}>
        <Tooltip title="delete">
          <DeleteIcon className='DeleteIcon' />
        </Tooltip>
      </span>
      <br/>
      <li style={{ textDecoration: line ? "line-through" : "none" }}>{props.text}</li>
    </div>
  );
};

export default TodoList;
