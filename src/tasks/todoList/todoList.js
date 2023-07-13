import React, { useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { createtododata,erasedata } from '../../slices/createData';
import { Typography } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import TextField from '@mui/material/TextField';
import './todoList.css'

const TodoList = () => {
    const[task,settask]=useState('');
    const[completed,setcompleted]=useState(null);
    const data=useSelector(state=>state.tododata.data);
    console.log("tododata",data);
    const dispatch=useDispatch();
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          dispatch(createtododata(task));
        }
    };
    const setcompletedtask=(index)=>{
      if(index === completed) setcompleted(null);
      else setcompleted(index);
    }
  return (
    <div className='todolist'>
    {data && data.map((item,index)=>{
        return(
            <div key={item.id} style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'50%',margin:'auto'}}>
            <Typography style={{textDecoration:completed === item.id?'line-through':'none'}}>{item.item}</Typography>
            <div>
            <TaskAltIcon onClick={()=>setcompletedtask(item.id)} />
            <DisabledByDefaultIcon onClick={()=>dispatch(erasedata(item.id))}/>
            </div>
            </div>
        )
    })}
    <TextField id="outlined-basic" label="Enter Todo Data" variant="outlined" onChange={(e)=>settask(e.target.value)} onKeyDown={(e)=>handleKeyDown(e)} style={{width:'50%',marginTop:20}} />
    </div>
  )
}

export default TodoList