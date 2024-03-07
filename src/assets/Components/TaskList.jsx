import React from 'react'
import TaskCard from './TaskCard';

export default function TaskList(props) {
  const deleteTask=(id)=>{
    props.getTask(id);
  }
  const renderList=props.tasks.map((task)=>{
    return(
     <TaskCard task={task} clickHandler={deleteTask} key={task.id}/>
    )
  })
  return (
    <div  className='mt-5 sm:px-20 px-10'>
      {renderList}
    </div>
  )
}
