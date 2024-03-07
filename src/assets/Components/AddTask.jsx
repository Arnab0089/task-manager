import React, { Component } from 'react'
import '../Component.css'

export default class AddTask extends Component {
  state ={
    title:"",
    task:""
  }

  add=(e)=>{
    e.preventDefault();//Don't want to page get refreshed
    if(this.state.title === "" || this.state.task===""){
      alert("ALL the fields are mandatory")
      return
    }
    this.props.addTaskHandler(this.state);
    this.setState({title: "" ,task:""})
  }
  render() {
    return (
     <div className='px-10 w-full'>
      <form onSubmit={this.add} >
        <div className='space-y-4'>
          <div >
            <div className=''>
            <h2 className='text-2xl font-semibold leding-3'>ADD TASK</h2>
            <p className='mt-1 text-sm leading-4'>This is a sample project for react</p>
            <div className='sm:grid sm:grid-cols-3 block'>
              <div className='mt-5 text-left col-span-2'>
                <label htmlFor="username" className="my-2 block text-xl font-medium leading-6 ">
                  Task Heading
                </label>
                <input type="text" name='title' placeholder='Add Your Title' className='border border-gray-300 rounded-md px-3 py-2 h-12 w-full'
                  value={this.state.title}
                 onChange={(e)=>this.setState({title:e.target.value})}/>
                <label htmlFor="username" className="my-2 block text-xl font-medium leading-6 ">
                  Task Details
                </label>
                <textarea name="" placeholder='Add Your task here'  rows="3" className='w-full rounded-md  border-gray-300 px-3 py-2'
                  value={this.state.task}
                 onChange={(e)=>this.setState({task:e.target.value})}
                ></textarea>
                <br />
              </div>

              <div className='flex justify-center items-center mt-5 '>
               <button className="button-19" role="button">ADD IT</button>
              </div>
            </div>
            </div>
           
          </div>
        </div>
      </form>
     </div>
    )
  }
}
