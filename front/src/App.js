import './App.css';
import React from 'react'
import Header from './components/Header'
import Task from './components/Task'
import data from './components/task.json'
function App() {
  
  return (
    <div  >
      <Header />
      <div className='container' >
        <div className='card-group'>
      {data.map((data)=>(
             
      <Task body = {data.body} title = {data.title}/>
            ))}
     </div>
    </div>
    </div>
  );
}



export default App;
