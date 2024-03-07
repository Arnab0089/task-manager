import React from 'react'
import { FaTrashAlt } from "react-icons/fa";


export default function TaskCard(props) {
    const {id,title,task}=props.task;
  return (
    <div>
       <>
      <div className='sm:grid sm:grid-cols-3 block text-center sm:text-start   px-2 py-2'>
    
        <div className='flex col-span-2 '>
          {/* <div >
            <input type="checkbox" className='px-2 py-2 h-12'/>
          </div> */}
          <div className='flex-col ' >
          <div className='text-xl font-semibold'>{title}</div>
          <div className='text-md'>{task}</div>
          </div>
        </div>

        <div className='flex justify-end w-full items-center px-5 py-2'>
          <i className='' onClick={()=>props.clickHandler(id)}><FaTrashAlt /></i>
        </div>

      </div>
      <hr className='bg-white w-full h-1'/>
      </>
    </div>
  )
}
