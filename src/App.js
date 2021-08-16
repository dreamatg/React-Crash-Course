import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTasks from './components/AddTask'
import React, { useState } from 'react'

function App() {
  const [showAddTask, setShowAddTask] = useState(false) 
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Do up react app',
            day: '15 Aug All Day',
            reminder: true,
        },
        {
            id: 2,
            text: 'Wake up early and go to work by 7am',
            day: '16 Aug at 6.30am',
            reminder: true,
        }

    ])

    //Add Task
    const addTask = (task) => {
      const id = Math.floor(Math.random() * 10000) + 1
      const newTask = {id, ...task}
      console.log(newTask)
      setTasks([...tasks, newTask])
    }
    
    // Delete Task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }

    // Toggle reminder
    const toggleReminder = (id) => {
      setTasks(tasks.map((task) => task.id === id
      ? { ...task, reminder: !task.reminder } : task 
      ))}




  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTasks onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} 
      onDelete={deleteTask}
      onToggle={toggleReminder}        
      >
      </Tasks> : 'No tasks to show'}
    </div>
  );
}

export default App;
