import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import React, { useState } from 'react'

function App() {
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

    const toggleReminder = (id) => {
      setTasks(tasks.map((task) => task.id === id
      ? { ...task, reminder: !task.reminder } : task 
      ))}

    // Delete Task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }


  return (
    <div className="container">
      <Header/>
      {tasks.length > 0 ? <Tasks tasks={tasks} 
      onDelete={deleteTask}
      onToggle={toggleReminder}        
      >
      </Tasks> : 'No tasks to show'}
    </div>
  );
}

export default App;
