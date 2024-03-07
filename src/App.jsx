// App.jsx
import React,{useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './assets/Components/Header';
import AddTask from './assets/Components/AddTask';
import TaskList from './assets/Components/TaskList';

export default function App() {
  const LOCAL_STORAGE_KEY="task"
 const [task, settask] = useState(() => {
  const storedTask = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedTask ? JSON.parse(storedTask) : [];
});
 const addTaskHandler=(tasking)=>{
  settask([...task,{id:uuidv4() ,...tasking}])
 }
 const removeTask=(id)=>{
  const newCopy=task.filter((tasking)=>{
    return tasking.id!=id;
  }) 
  settask(newCopy);
 }

 useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(task))
 },[task])
  return (
    <div>
      <Header />
      <AddTask addTaskHandler={addTaskHandler}/>
      <TaskList tasks={task} getTask={removeTask}/>
    </div>
  );
}
