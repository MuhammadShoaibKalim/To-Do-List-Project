import './App.css';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import List from './List';
import Tooltip from '@mui/material/Tooltip'; // Import the Tooltip component

function App() {
  const [item, setItem] = useState('');
  const [newitem, setNewitem] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);
  };

  const listOfItem = () => {
    if (item.trim() !== '') {
      setNewitem((prevValue) => [...prevValue, item]);
      setItem('');
    }
  };

  return (
    <div className="main_div">
      <div className="center_div">
        <h1>TODO List</h1>
        <input
          type="text"
          onChange={itemEvent}
          value={item}
          placeholder="Enter your value"
        />
       <Button className="newBtn" onClick={listOfItem}>
  <Tooltip title="Add">
    <AddIcon className='add'/>
  </Tooltip>
  
  <Tooltip title="Delete">
    <DeleteIcon />
  </Tooltip>
</Button>

        <ol>
          {newitem.map((val, index) => (
            <List key={index} text={val} />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
